import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly baseURL = 'http://localhost:4000';
  currentUser = undefined;
  currentUserLogedIn = false;

  constructor(private http: HttpClient) { }

  public login(loginForm: NgForm): Observable<User> {
    console.log('login service auth')
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(loginForm.value);
    return this.http.post(this.baseURL + '/users/authenticate', body, { 'headers': headers })
      .pipe(
        catchError(this.handleError('login failed'))
      );
  }

  handleError(arg0: string): (err: any, caught: Observable<Object>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
