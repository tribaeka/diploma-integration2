import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Cv} from '../model/cv';
import {TokenStorageService} from './token-storage.service';
import {MessageResponse} from '../model/message-response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  gerUsersCv(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.apiUrl + '/cv/user/' + this.tokenStorage.getUser().username);
  }

  downloadCv(cv: Cv) {
    const urlForDownloading = this.apiUrl + '/cv/download/' + cv.cvId;

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', urlForDownloading);
    link.setAttribute('download', cv.fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  deleteCv(cv: Cv): Observable<Cv[]> {
    return this.http.delete<Cv[]>(this.apiUrl + '/cv/' + cv.cvId);
  }

  createCv(data): Observable<any> {
    return this.http.post(this.apiUrl + '/cv', data);
  }

  sendCvToContact(formData: FormData): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.apiUrl + '/util/sendJobRespond', formData);
  }
}
