import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);//{"id":6,"username":"sidhant","email":"sid@gmail.com","roles":["ROLE_USER"],"accessToken":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaWRoYW50IiwiaWF0IjoxNTkyMjAwNzY4LCJleHAiOjE1OTMwNjQ3Njh9.ib1WdwHwUgeuD_h01ggPWOP3nNr3V0fkeo72GfbfqmIvvtgEbbnx1QpmMbKhluefT2IdJnY7tbsEwKhwr1U_6w","tokenType":"Bearer"}

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
