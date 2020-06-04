import {Skill} from './skill';
import {Company} from './company';

export interface Job {
  jobId: number;
  title: string;
  description: string;
  location: string;
  jobSkillSet: Skill[];
  postDate: string;
  companiesJob: Company;
  salary: number;
  experience: number;
}
