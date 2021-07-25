import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token } from '../Model/Token';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { User } from '../Model/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginUrl="http://localhost:8000/api/login"
  refreshUrl="http://127.0.0.1:8000/api/token/refresh";

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient) {}

  login(user:User): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          console.log(error.error);
          return of(false);
        }));
  }

  logout() {
this.doLogoutUser();

  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(this.refreshUrl, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Token) => {
      this.storeJwtToken(tokens.token);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Token) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
    localStorage.setItem('test', jwt);
  }

  private storeTokens(tokens: Token) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


}
