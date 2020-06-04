import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Router} from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  logout() {
    window.sessionStorage.clear();
    this.router.navigate(['']);
  }

  saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(window.sessionStorage.getItem(USER_KEY));
  }

  isLoggedIn(): boolean {
    return Boolean(this.getToken());
  }
}
