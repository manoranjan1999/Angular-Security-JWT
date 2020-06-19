import { Injectable } from '@angular/core';

const TOKEN_KEY: string = 'auth-token';
const USER_KEY: string = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  //here we save the token to session storage
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  //here we remove the token from the session storage 
  public removeToken() {
    window.sessionStorage.clear();
  }

  //here we get the token
  public getToken() {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  //here we save the user object to session storage by stringify the user object
  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //here we get the user object by parsing
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  signOut() {
    window.sessionStorage.clear();
  }

}
