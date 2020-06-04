import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobDetailsComponent} from './core/job-details/job-details.component';
import {JobSearchResultsComponent} from './core/job-search-results/job-search-results.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './core/user-profile/user-profile.component';
import {JobPostComponent} from './core/job-post/job-post.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {side: 'job'} },
  { path: 'job/search/:query', component: JobSearchResultsComponent },
  { path: 'job/:id/:query', component: JobDetailsComponent },
  { path: 'job/:id', component: JobDetailsComponent },
  { path: 'user/profile', component: UserProfileComponent },
  { path: 'postJob', component: JobPostComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
