import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import * as jwt_decode from 'jwt-decode';
import {User} from "../../domain-types/models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) {
  }

  logoutUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("user");
    this.router.navigate(['/signin']).then()
  }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getUser(): User | null {
    const user = localStorage.getItem('user')
    if (user !== null) {
      return JSON.parse(user)
    }

    return null

  }

  // public decodePayloadJWT(): any {
  //   try {
  //     return jwt_decode(this.getToken());
  //   } catch (Error) {
  //     return null;
  //   }
  // }

}
