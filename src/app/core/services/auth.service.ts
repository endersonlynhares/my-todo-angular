import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) {
  }

  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    this.router.navigate(['/signin']).then()
  }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // public decodePayloadJWT(): any {
  //   try {
  //     return jwt_decode(this.getToken());
  //   } catch (Error) {
  //     return null;
  //   }
  // }

}
