import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Job} from '../../model/job';
import {JobFilter} from '../../model/job-filter';

@Component({
  selector: 'app-salary-filter',
  templateUrl: './salary-filter.component.html',
  styleUrls: ['./salary-filter.component.scss']
})
export class SalaryFilterComponent implements OnInit, JobFilter {
  @Output() onApplySalaryFilter = new EventEmitter();
  salaryFilterList: number[] = [];
  selectedFilterValue: number;

  constructor() {
    this.initSalaryFilterList(0, 2000);
  }

  ngOnInit() {
    this.selectedFilterValue = 0;
  }

  applySalaryFilter(event: any) {
    this.selectedFilterValue = event.target.selectedOptions[0].value;
    this.onApplySalaryFilter.emit(this);
  }

  filter(jobs: Job[]): Job[] {
    return jobs.filter((item: Job) => item.salary >= this.selectedFilterValue);
  }

  initSalaryFilterList(from: number, to: number) {
    while (from <= to) {
      this.salaryFilterList.push(from);
      from += 250;
    }
  }
}
