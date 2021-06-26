import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { LoginService } from '../login.service';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm!: FormGroup;
  loginItem = {
    username: '', 
    password: ''
  };

  readonly baseURL = 'http://localhost:4000';

  constructor(private dialogRef: MatDialogRef<LoginComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private loginService: LoginService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(16)]]
    });
   }

  public close() {
    this.dialogRef.close();
  }

  public login(loginForm: NgForm) {
    //implementing user service is in progress
    //this.loginService.login(loginForm).subscribe();;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(loginForm.value);
    this.http.post(this.baseURL + '/users/authenticate', body,{'headers':headers})
      .subscribe(
        (res:any) => {
          console.log('login success', res);
          this.loginService.currentUser = res;
          this.loginService.currentUserLogedIn = true;
          if (res['token']) {
            localStorage.setItem('token', res['token']); //token here is stored in a local storage
          }
        },
        (err) => {
          console.log(err);
        }
      );  

    this.dialogRef.close();
  }
}