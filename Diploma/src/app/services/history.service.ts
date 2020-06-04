import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Observable} from 'rxjs';
import {JobHistory} from '../model/job-history';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  apiUrl = environment.apiUrl;

  constructor(private tokenStorage: TokenStorageService, private http: HttpClient) { }

  addJobToHistory(id: number): Observable<any> {
    return this.http.post(this.apiUrl + '/history/' + this.tokenStorage.getUser().userId, id);
  }

  getHistoryByUserId(userId: number): Observable<JobHistory[]> {
    return this.http.get<JobHistory[]>(this.apiUrl + '/history/' + userId);
  }
}
