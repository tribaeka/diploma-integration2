import {Skill} from './skill';

export interface Cv {
  cvId: number;
  title: string;
  fileName: string;
  cvSkillSet: Skill[];
  user: number;
}
