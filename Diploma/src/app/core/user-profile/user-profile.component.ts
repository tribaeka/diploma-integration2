import {ApplicationRef, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../model/user';
import {ResourceService} from '../../services/resource.service';
import {HistoryService} from '../../services/history.service';
import {JobHistory} from '../../model/job-history';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../model/company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  defaultUserImagePath: string;
  defaultCompanyLogoPath: string;
  activeTab: string;
  tabMap = {
    cvList: 'cvList',
    jobList: 'jobList',
    history: 'history'
  };
  jobsFromHistory: JobHistory[];
  company: Company;
  uploadTarget: string;
  constructor(private tokenStorageService: TokenStorageService,
              private resources: ResourceService,
              private route: ActivatedRoute,
              private companyService: CompanyService,
              private historyService: HistoryService) {
  }

  ngOnInit() {
    this.user = this.tokenStorageService.getUser();
    this.activeTab = this.tabMap.cvList;
    this.defaultUserImagePath = this.resources.getDefaultUserImagePath();
    this.defaultCompanyLogoPath = this.resources.getDefaultCompanyLogoPath();
    this.historyService.getHistoryByUserId(this.user.userId)
      .subscribe(jobs => this.jobsFromHistory = jobs);
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActive(tabName: string): boolean {
    return this.activeTab === tabName;
  }

  userImageIsExist(): boolean {
    return !!this.tokenStorageService.getUser().imageName;
  }

  getUserImageSource(): string {
    const user = this.tokenStorageService.getUser();
    return this.resources.resolveImageResource(user.imageName);
  }

  onNavigate(url: string): void {
    const httpsPrefix = 'https://';
    if (url.includes(httpsPrefix)) {
      window.open(url, '_blank');
    } else {
      window.open(httpsPrefix + url, '_blank');
    }
  }

  activateUserUpload(): void {
    this.uploadTarget = 'user';
  }
}
