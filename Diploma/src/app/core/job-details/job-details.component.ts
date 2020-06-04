import { Component, OnInit } from '@angular/core';
import {Job} from '../../model/job';
import {JobService} from '../../services/job.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job: Job;
  isSearchQueryExist: boolean;
  constructor(private jobService: JobService,
              private route: ActivatedRoute,
              private tokenStorage: TokenStorageService,
              private historyService: HistoryService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const jobId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.jobService.getOneJob(jobId).subscribe(data => {
      this.job = data;
      this.historyService.addJobToHistory(this.job.jobId).subscribe();
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.isSearchQueryExist = params.has('query');
    });
  }

}
