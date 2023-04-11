import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { env } from '../../../environments/env';
import {IUserInfo} from "../../core/interfaces/IUserInfo";
import { UserAuth } from '../../core/models/UserAuth.model';
import {TokenService} from "../../core/services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private userAuth: UserAuth = new UserAuth();
  public messageError: any;
  public loginForm: FormGroup | any;
  public submitted = false;


  constructor(private router: Router,private httpClient: HttpClient,private fb: FormBuilder, private token: TokenService) {
    this.createForm();
  }


  createForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    let value = this.loginForm.value;
    this.userAuth.userName = value.userName;
    this.userAuth.password = value.password;
    this.login(this.userAuth);
  }

  get f() { return this.loginForm.controls; }

  login(userAuth: UserAuth) {
    this.httpClient.post<IUserInfo>(env.base_url + env.rout_url.user, userAuth)
      .subscribe(
        result => {
          sessionStorage.setItem("user", JSON.stringify(result));
          this.token.saveToken(result.token);
          //this.token.saveAuthority(result.isAdmin);
          // sessionStorage.setItem("token", result.token);
          this.router.navigate(['']).then(() => {
             window.location.reload();
          });
        }, error => {
          console.log(error)
          this.messageError = error.error;
        }
      )
  }

}
