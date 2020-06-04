import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  width: number;
  height: number;
  constructor() { }

  ngOnInit() {
    this.height = window.screen.height * 0.65;
  }

}
