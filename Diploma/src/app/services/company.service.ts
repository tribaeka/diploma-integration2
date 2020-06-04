import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../model/company';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = environment.apiUrl + '/company';

  constructor(private http: HttpClient) { }

  addCompany(companyData): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, companyData);
  }

  addContactToCompany(contactData, companyId: number): Observable<Company> {
    return this.http.post<Company>(this.apiUrl + '/addContact/' + companyId, contactData);
  }
}
