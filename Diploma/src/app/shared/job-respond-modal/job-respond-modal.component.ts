import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CvService} from '../../services/cv.service';
import {Cv} from '../../model/cv';
import {Job} from '../../model/job';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-job-respond-modal',
  templateUrl: './job-respond-modal.component.html',
  styleUrls: ['./job-respond-modal.component.scss']
})
export class JobRespondModalComponent implements OnInit {

  @Input() job: Job;

  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;

  jobRespondForm: FormGroup;
  cvList: Cv[];

  constructor(private formBuilder: FormBuilder,
              private cvService: CvService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.jobRespondForm = this.formBuilder.group({
      cv: [''],
      comment: ['']
    });
    this.cvService.gerUsersCv().subscribe(listOfCv => {
      this.cvList = listOfCv;
    });
  }

  onSubmit(): void {
    const dataToSend = new FormData();
    dataToSend.append('contactId', this.job.companiesJob.contact.contactId.toString());
    dataToSend.append('jobTitle', this.job.title);
    dataToSend.append('cvId', this.jobRespondForm.get('cv').value.toString());
    dataToSend.append('userId', this.tokenStorage.getUser().userId.toString());
    dataToSend.append('comment', this.jobRespondForm.get('comment').value.toString());
    console.log(dataToSend);
    this.cvService.sendCvToContact(dataToSend)
      .subscribe((message) => {
        console.log(message.message);
        this.closeBtn.nativeElement.click();
      });
  }

}
