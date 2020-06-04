import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Cv} from '../../model/cv';
import {CvService} from '../../services/cv.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-cv-list-item',
  templateUrl: './cv-list-item.component.html',
  styleUrls: ['./cv-list-item.component.scss'],
  animations: [
    trigger('showItem', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('800ms ease-out')),
      transition(':leave', animate('800ms ease-in')),
    ]),
    trigger('hideItem', [
      state('exist', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition('exist=>removed', animate('400ms ease-in')),
    ])
  ],
})
export class CvListItemComponent implements OnInit {
  modalDataTarget: string;
  isRemoved = false;
  animationDurationOnHide = 400;
  @Input() cv: Cv;
  @Output() cvIsDeleted = new EventEmitter();
  @ViewChild('updateBtn', { static: false }) updateBtn: ElementRef;

  constructor(private cvService: CvService, private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.modalDataTarget = '#' + this.cv.cvId + 'updateCvModal';
  }

  downloadCv() {
    this.cvService.downloadCv(this.cv);
  }

  deleteCv() {
    this.isRemoved = true;
    setTimeout(() => {
      this.cvService.deleteCv(this.cv)
        .subscribe(response => this.cvIsDeleted.emit(this.cv));
    }, this.animationDurationOnHide);
  }

  updateCv() {
    this.dataTransferService.changeCvToUpdate(this.cv);
    this.updateBtn.nativeElement.click();
  }
}
