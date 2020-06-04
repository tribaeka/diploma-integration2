import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../model/job';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiUrl = environment.apiUrl + '/job';

  constructor(private http: HttpClient) {}

  getOneJob(id: number): Observable<Job> {
    return this.http.get<Job>(this.apiUrl + '/' + id);
  }

  createJob(jobData): Observable<Job> {
    return this.http.post<Job>(this.apiUrl + '/', jobData);
  }

  linkJobWithSkillsSet(linkData: FormData): Observable<Job> {
    return this.http.post<Job>(this.apiUrl + '/addSkills', linkData);
  }

  linkJobWithCompany(linkData: FormData): Observable<Job> {
    return this.http.post<Job>(this.apiUrl + '/addCompany', linkData);
  }
}
