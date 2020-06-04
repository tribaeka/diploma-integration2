import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../model/company';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-company-side-bar',
  templateUrl: './company-side-bar.component.html',
  styleUrls: ['./company-side-bar.component.scss']
})
export class CompanySideBarComponent implements OnInit {
  @Input() company: Company;
  public resolvedLogoPath: string;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resolvedLogoPath = this.resourceService.resolveImageResource(this.company.logoPath);
  }

}
