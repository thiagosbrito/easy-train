import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  userLogin: String = '';
  userPass: String = '';
  authFailed: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      userLoginfrm: [
        { value: this.userLogin, disabled: false }, [Validators.required]],
      userPassfrm: [
        { value: this.userPass, disabled: false }, [Validators.required]],
    });
  }

  performLogin(): void {

    const req = this.loginService.authenticate(this.loginFormGroup.controls['userLoginfrm'].value,
      this.loginFormGroup.controls['userPassfrm'].value).pipe(catchError(val => of(false)));

    req.subscribe((data) => {
      console.log(`Auth Response: ${data}`);
      if (!data) {
        this.authFailed = true;
      } else {
        this.authFailed = false;
      }
      return data;
    })

  }
}

