import {Component, Input, OnInit} from '@angular/core';
import {JobHistory} from '../../model/job-history';

@Component({
  selector: 'app-history-list-item',
  templateUrl: './history-list-item.component.html',
  styleUrls: ['./history-list-item.component.scss']
})
export class HistoryListItemComponent implements OnInit {
  @Input() item: JobHistory;
  constructor() { }

  ngOnInit() {
  }

}
