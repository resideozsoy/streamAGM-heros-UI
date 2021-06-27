import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

import { Router } from '@angular/router';
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
    private router: Router
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
    this.loginService.login(loginForm)
      .subscribe(
        () => {
          console.log("User is logged in");
          this.router.navigateByUrl('/');
        }
      );
    this.dialogRef.close();
  }
}