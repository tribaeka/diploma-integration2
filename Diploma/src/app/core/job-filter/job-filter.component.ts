import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from '../../model/job';
import {JobFilter} from '../../model/job-filter';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent implements OnInit {
  @Input() jobs: Job[];
  @Output() onUpdateResults = new EventEmitter();
  activeFilters: Set<JobFilter>;
  constructor() {
    this.activeFilters = new Set<JobFilter>();
  }

  ngOnInit() {
  }

  apply() {
    const results = [];
    this.activeFilters.forEach((filter: JobFilter) => {
      results.push(filter.filter(this.jobs));
    });
    this.onUpdateResults.emit(this.intersections(results));
  }

  applySalaryFilter(filter: JobFilter) {
    this.activeFilters.add(filter);
    this.apply();
  }

  applyTypeFilter(filter: JobFilter) {
    this.activeFilters.add(filter);
    this.apply();
  }

  applyExperienceFilter(filter: JobFilter) {
    this.activeFilters.add(filter);
    this.apply();
  }

  intersections(arrayOfArrays: [][]) {
    return arrayOfArrays
      .reduce((acc: object[], array: object[], index) => { // Intersect arrays
        if (index === 0) {
          return array;
        }
        return array.filter((value) => acc.includes(value));
      }, [])
      .filter((value, index, self) => self.indexOf(value) === index) // Make values unique
      ;
  }
}
