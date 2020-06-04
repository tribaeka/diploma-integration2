import {Job} from './job';

export interface JobFilter {
  filter(jobs: Job[]): Job[];
}
