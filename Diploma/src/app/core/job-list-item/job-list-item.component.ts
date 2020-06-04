import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../model/job';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.scss']
})
export class JobListItemComponent implements OnInit {
  @Input() job: Job;
  query: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => this.query = params.get('query'));
  }
}
