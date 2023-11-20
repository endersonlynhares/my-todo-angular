import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.sass']
})
export class AuthLayoutComponent {
  pathLogoImage: string = 'assets/logo.svg'

  constructor(private router: Router) {
  }

  isLogin(): boolean {
    return this.router.url.endsWith('/signin')
  }
}
