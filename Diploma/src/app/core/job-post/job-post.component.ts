import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResourceService} from '../../services/resource.service';
import {CompanyService} from '../../services/company.service';
import {MessageResponse} from '../../model/message-response';
import {Company} from '../../model/company';
import {JobService} from '../../services/job.service';
import {FormsModule} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {
  step: number;
  companyForm: FormGroup;
  file: any;
  fileName: string;
  company: Company;
  contactForm: FormGroup;
  jobForm: FormGroup;
  options: string[];
  showDropDown: boolean;
  activeOption: string;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '300px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: true,
    placeholder: 'Enter job\' description...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'customClasses',
      ]
    ]
  };
  defaultLabel = 'Choose image';

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private resource: ResourceService,
    private companyService: CompanyService,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.step = 0;
    this.companyForm = this.fb.group({
      name: ['', [ Validators.required ]],
      siteUrl: [''],
      logoPath: [''],
    });
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phone: ['']
    });
    this.jobForm = this.fb.group({
      title: [''],
      description: [''],
      location: [''],
      jobSkillSet: ['' , [Validators.minLength(1)]],
      salary: [''],
      experience: ['']
    });
    this.resource.getAutocompleteSkillsDictionary().subscribe(skillsSet => this.options = skillsSet);
  }

  handleFileInputChanges() {
    const selectedFile = this.fileInput.nativeElement.files[0];
    this.file = selectedFile;
    this.fileName = selectedFile.name;
  }

  getFileLabel(): string {
    return this.fileName || this.defaultLabel;
  }

  onCompanyFormSubmit(): void {
    const fd = new FormData();
    fd.append('file', this.file, this.fileName);
    this.resource.uploadImageToCompany(fd)
      .subscribe((response: MessageResponse) => {
        this.companyForm.patchValue({
          logoPath: response.message
        });
        this.companyService.addCompany(this.companyForm.value)
          .subscribe(company => {
            this.company = company;
            this.step++;
          });
      });
  }

  onContactFormSubmit(): void {
    this.companyService.addContactToCompany(this.contactForm.value, this.company.companyId)
      .subscribe(company => {
        this.company = company;
        this.step++;
      });
  }

  openDropDown() {
    this.showDropDown = true;
  }

  closeDropDown() {
    this.showDropDown = false;
  }

  setActiveOption(option: string) {
    this.activeOption = option;
  }

  updateSkillsInputOnSelectOption(option: string) {
    const skillsInputValue = this.jobForm.get('jobSkillSet').value;
    if (skillsInputValue === null || !skillsInputValue.includes(' ')) {
      this.jobForm.patchValue({
        jobSkillSet: option + ' '
      });
    } else {
      const queryArray = skillsInputValue.split(' ');
      queryArray[queryArray.length - 1] = option;
      this.jobForm.patchValue({
        jobSkillSet: queryArray.join(' ') + ' '
      });
    }
  }

  onJobFormSubmit(): void {
    const jobData = this.jobForm.value;
    delete jobData.jobSkillSet;
    this.jobService.createJob(jobData)
      .subscribe(job => {
        const skillsFd = new FormData();
        skillsFd.append('skills', this.jobForm.get('jobSkillSet').value.toString());
        skillsFd.append('jobId', job.jobId.toString());
        this.jobService.linkJobWithSkillsSet(skillsFd)
          .subscribe(() => {
            const companyFd = new FormData();
            companyFd.append('companyId', this.company.companyId.toString());
            companyFd.append('jobId', job.jobId.toString());
            this.jobService.linkJobWithCompany(companyFd)
              .subscribe(() => {
                this.step++;
              });
          });
      });
  }
}
