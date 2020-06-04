import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {Job} from '../../model/job';

@Component({
  selector: 'app-job-search-results',
  templateUrl: './job-search-results.component.html',
  styleUrls: ['./job-search-results.component.scss']
})
export class JobSearchResultsComponent implements OnInit {
  initResults: Job[];
  results: Job[];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.isLoading = true;
      const query = params.get('query');
      this.searchService.executeJobSearch(query)
        .subscribe(data => {
          this.initResults = this.results = data;
          this.isLoading = false;
        });
    });
  }

  updateResults(jobs: Job[]) {
    this.results = jobs;
  }
}
