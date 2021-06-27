import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user/user';
import { tap, catchError } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn = new BehaviorSubject<boolean>(false);
  readonly baseURL = 'http://localhost:4000';
  currentUser = undefined;

  constructor(private http: HttpClient) { }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at") || moment().add(3, 'hours').toISOString();
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public login(loginForm: NgForm): Observable<User> {
    console.log('login service auth')
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(loginForm.value);

    return this.http.post<User>(this.baseURL + '/users/authenticate', body, { 'headers': headers })
      .pipe(
        tap(authResult => this.setSession(authResult),
          catchError(this.handleError<any>('login failed'))
        ));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private setSession(authResult: any): void {
    const expiresAt = moment().add(authResult.expiresIn, 'hours');

    this.currentUser = authResult || new User();
    this.loggedIn.next(true);
    if (authResult['token']) {
      localStorage.setItem('token', authResult['token']); //token here is stored in a local storage
    }
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }
}
