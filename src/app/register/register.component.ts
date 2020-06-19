import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful: boolean = false;
  isSignupFailed: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.authService.register(this.form).subscribe(data => {

      console.log(data);
      this.isSuccessful = true;
      this.isSignupFailed = false;
    },
      err => {
        this.errorMessage = err.error.message;
        this.isSignupFailed = true;
      }
    );
  }

}
