import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {MessageResponse} from '../model/message-response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  resolveImageResource(imagePath: string): string {
    return this.apiUrl.concat(imagePath);
  }

  getAutocompleteSearchDictionary(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + '/util/autocomplete/search');
  }

  getAutocompleteSkillsDictionary(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + '/util/autocomplete/skills');
  }

  getPopularSearchBuilds(): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(this.apiUrl + '/util/search-builds/job');
  }

  getDefaultUserImagePath(): string {
    return this.apiUrl + '/img/user_default.png';
  }

  getDefaultCompanyLogoPath(): string {
    return this.apiUrl + '/img/company_default.png';
  }

  uploadImageToUser(data: FormData): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/user/uploadImage', data);
  }

  uploadImageToCompany(data: FormData): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.apiUrl + '/company/uploadImage', data);
  }
}
