import {Job} from './job';
import {User} from './user';

export class JobHistory {
  jobOpenHistoryId: number;
  historyJob: Job;
  historyUser: User;
  accessDate: Date;
}
