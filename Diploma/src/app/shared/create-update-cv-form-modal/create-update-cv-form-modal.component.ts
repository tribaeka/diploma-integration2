import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResourceService} from '../../services/resource.service';
import {CvService} from '../../services/cv.service';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../services/token-storage.service';
import {Cv} from '../../model/cv';
import {Skill} from '../../model/skill';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-create-update-cv-form-modal',
  templateUrl: './create-update-cv-form-modal.component.html',
  styleUrls: ['./create-update-cv-form-modal.component.scss']
})
export class CreateUpdateCvFormModalComponent implements OnInit {
  createCvForm: FormGroup;
  options: string[];
  showDropDown: boolean;
  activeOption: string;
  file: any;
  cvToUpdate: Cv;
  @Input() isUpdateModal: boolean;
  @Output() onComplete = new EventEmitter();
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  constructor(private resourceService: ResourceService,
              private formBuilder: FormBuilder,
              private cvService: CvService,
              private tokenStorage: TokenStorageService,
              private http: HttpClient,
              private dataTransferService: DataTransferService
  ) {
    this.createCvForm = this.formBuilder.group({
      title: ['', Validators.minLength(1)],
      skills: [''],
      file: ['']
    });
    resourceService.getAutocompleteSkillsDictionary().subscribe(data => this.options = data);
    this.dataTransferService.currentCvToUpdate.subscribe(cv => {
      this.cvToUpdate = cv;
      if (this.cvToUpdate !== null) {
        this.createCvForm = this.formBuilder.group({
          title: [this.cvToUpdate.title],
          skills: [this.cvToUpdate.cvSkillSet.map((skill: Skill) => skill.name)
            .toString().split(',').join(' ')],
          file: [this.extractOriginalFileName(this.cvToUpdate.fileName)]
        });
      } else {
        this.createCvForm = this.formBuilder.group({
          title: ['', Validators.minLength(1)],
          skills: [''],
          file: ['']
        });
      }
    });
  }

  ngOnInit() {
  }

  handleFileInputChanges() {
    const selectedFile = this.fileInput.nativeElement.files[0];
    this.file = selectedFile;
    this.createCvForm.patchValue({
      file: selectedFile.name
    });
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('title', this.createCvForm.get('title').value);
    fd.append('skills', this.createCvForm.get('skills').value
      .replace(/\s{2,}/g, ' '));
    if (this.file) {
      fd.append('file', this.file, this.createCvForm.get('file').value);
    }
    fd.append('user', this.tokenStorage.getUser().userId.toString());
    if (this.isUpdateModal) {
      this.http.put<Cv>('http://localhost:8080/cv/' + this.cvToUpdate.cvId, fd)
        .subscribe(updatedCv => {
          this.finalizeSuccess(updatedCv);
        });
    } else {
      this.http.post('http://localhost:8080/cv', fd)
        .subscribe(response => {
          this.finalizeSuccess();
        });
    }

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
    const skillsInputValue = this.createCvForm.get('skills').value;
    if (skillsInputValue === null || !skillsInputValue.includes(' ')) {
      this.createCvForm.patchValue({
        skills: option + ' '
      });
    } else {
      const queryArray = skillsInputValue.split(' ');
      queryArray[queryArray.length - 1] = option;
      this.createCvForm.patchValue({
        skills: queryArray.join(' ') + ' '
      });
    }
  }

  finalizeSuccess(updatedCv?: Cv) {
    this.dataTransferService.changeCvToUpdate(null);
    this.closeBtn.nativeElement.click();
    this.createCvForm.reset();
    this.isUpdateModal ? this.onComplete.emit(updatedCv) : this.onComplete.emit();
  }

  extractOriginalFileName(fileName: string): string {
    return fileName.split('!')[1];
  }
}
