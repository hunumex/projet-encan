import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private router: Router,private httpClient: HttpClient,private fb: FormBuilder) {
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
    this.httpClient.post<UserInfo>(`https://localhost:7138/user`, userAuth)
      .subscribe(
        result => {
          sessionStorage.setItem("user", JSON.stringify(result));
          console.log(result);
          // sessionStorage.setItem("token", result.token);
          //this.router.navigate(['/accueil']).then(() => {

          //  // window.location.reload();
          //});
        }, error => {
          console.log(error)
          this.messageError = error.error;
        }
      )
  }

}

export class UserAuth {
  userName: string | any;
  password: string | any
}

export interface UserInfo {
  id: string;
  userName: string;
  token: string;
  isAdmin: boolean
}
