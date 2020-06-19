import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  //for login api send username and password form angular
  login(credential): Observable<any> {
    return this.http.post(auth_API + 'signin', { username: credential.username, password: credential.password }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(auth_API + 'signup', { username: user.username, email: user.email, password: user.password }, httpOptions);
  }
}
