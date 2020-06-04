import {Component, Input, OnInit} from '@angular/core';
import {Skill} from '../../model/skill';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {
  @Input() skills: Skill[];
  @Input() isActiveSkillSet: boolean;
  currentSubQuery: string;
  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.dataTransferService.currentSubQuery.subscribe(subQuery => this.currentSubQuery = subQuery);
  }

  skillClickHandler(skill: Skill) {
    this.dataTransferService.changeSubQuery(this.currentSubQuery + ' ' + skill.name);
  }
}
