import { Component, OnInit } from '@angular/core';
import {CvService} from '../../services/cv.service';
import {Cv} from '../../model/cv';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-user-cv',
  templateUrl: './user-cv.component.html',
  styleUrls: ['./user-cv.component.scss']
})
export class UserCvComponent implements OnInit {
  cvList: Cv[];
  isLoading: boolean;
  constructor(private cvService: CvService, private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.updateCvList();
  }

  prepareModal() {
    this.dataTransferService.changeCvToUpdate(null);
  }

  updateCvList() {
    this.isLoading = true;
    this.cvService.gerUsersCv().subscribe(listOfCv => {
      this.cvList = listOfCv;
      this.isLoading = false;
    });
  }
}
