import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl + '/api/auth';

  constructor(private http: HttpClient) {}

  login(loginData): Observable<any> {
    return this.http.post<User>(this.apiUrl + '/signin', loginData);
  }

  registration(registrationData, role?: string): Observable<any> {
    if (!!role) {
      registrationData.role = [ role ];
    } else {
      registrationData.role = [ 'user' ];
    }
    return this.http.post<any>(this.apiUrl + '/signup', registrationData);
  }
}
