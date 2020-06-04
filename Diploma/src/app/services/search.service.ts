import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Job} from '../model/job';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  executeJobSearch(query: string): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl + '/job/search?query=' + encodeURIComponent(query));
  }
}
