import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataTransferService} from '../services/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  side: string;
  constructor(private route: ActivatedRoute, private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dataTransferService.changeSide(data.side);
    });
    this.dataTransferService.currentSide.subscribe(currentSide => this.side = currentSide);
  }
}
