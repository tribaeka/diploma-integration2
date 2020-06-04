import {Component, Input, OnInit} from '@angular/core';
import {JobHistory} from '../../model/job-history';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  @Input() history: JobHistory[];

  constructor() { }

  ngOnInit() {
  }

}
