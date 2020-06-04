import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {Job} from '../../model/job';

@Component({
  selector: 'app-similar-jobs',
  templateUrl: './similar-jobs.component.html',
  styleUrls: ['./similar-jobs.component.scss']
})
export class SimilarJobsComponent implements OnInit {
  @Input() jobToExclude: Job;
  similarJobs: Job[];
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const query = params.get('query');
      this.searchService.executeJobSearch(query)
        .subscribe(data => this.similarJobs = data.filter(job => job !== this.jobToExclude));
    });
  }

}
