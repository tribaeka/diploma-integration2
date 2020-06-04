import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobDetailsComponent} from './job-details/job-details.component';
import {JobListComponent} from './job-list/job-list.component';
import {JobListItemComponent} from './job-list-item/job-list-item.component';
import {JobSearchResultsComponent} from './job-search-results/job-search-results.component';
import {JobSearchInputComponent} from './job-search-input/job-search-input.component';
import {SimilarJobsComponent} from './similar-jobs/similar-jobs.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {JobFilterComponent} from './job-filter/job-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FiltersModule} from '../filters/filters.module';
import {ClickOutsideModule} from 'ng-click-outside';
import {CvListComponent} from './cv-list/cv-list.component';
import {CvListItemComponent} from './cv-list-item/cv-list-item.component';
import {UserCvComponent} from './user-cv/user-cv.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryListItemComponent } from './history-list-item/history-list-item.component';
import { JobPostComponent } from './job-post/job-post.component';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    JobDetailsComponent,
    JobListComponent,
    JobListItemComponent,
    JobSearchResultsComponent,
    JobSearchInputComponent,
    JobFilterComponent,
    SimilarJobsComponent,
    CvListComponent,
    CvListItemComponent,
    UserCvComponent,
    UserProfileComponent,
    HistoryListComponent,
    HistoryListItemComponent,
    JobPostComponent
  ],
  exports: [
    JobSearchInputComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FiltersModule,
    ClickOutsideModule,
    AngularEditorModule
  ]
})
export class CoreModule { }
