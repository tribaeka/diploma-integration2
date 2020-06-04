import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Job} from '../../model/job';
import {JobFilter} from '../../model/job-filter';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent implements OnInit, JobFilter {
  @Output() onApplyTypeFilter = new EventEmitter();
  @Output() onResetTypeFilter = new EventEmitter();
  filterValue: string;
  constructor() { }

  ngOnInit() {
    this.filterValue = 'All';
  }

  applyTypeFilter(typeOfFilter: string) {
    this.filterValue = typeOfFilter;
    this.onApplyTypeFilter.emit(this);
  }

  filter(jobs: Job[]): Job[] {
    switch (this.filterValue) {
      case 'All': return jobs;
      case 'Remote': return jobs.filter((item: Job) => this.isRemoteLocation(item.location));
    }
  }

  isRemoteLocation(location: string): boolean {
    return (location === 'Remote') || (location === 'remote)');
  }
}
