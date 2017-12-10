import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  get isAuthenticated() {
    return !!localStorage.getItem("token");
  }
  register(credentials) {
    return this.httpClient
      .post<any>(`https://localhost:44320/api/Account`, credentials)
      .subscribe(res => {
        this.authenticated(res);
      });
  }

  login(credentials) {
    return this.httpClient
      .post<any>(`https://localhost:44320/api/Account/login`, credentials)
      .subscribe(res => {
        this.authenticated(res);
      });
  }

  authenticated(res) {
    localStorage.setItem("token", res);
    this.router.navigate(["/"]);
  }
  logout() {
    localStorage.removeItem("token");
  }
}
