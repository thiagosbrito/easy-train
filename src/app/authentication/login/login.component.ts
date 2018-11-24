import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { map, subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  userLogin: String = '';
  userPass: String = '';
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
    this.loginService.authenticate(this.userLogin, this.userPass).subscribe((data)=> {
      console.log(data);
    })
  }
}

