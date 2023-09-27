import {Component} from '@angular/core';
import {sideNavData} from "./sidenav-data";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  collapsed: boolean = false
  sideNavData = sideNavData

  constructor(
    private authService: AuthService
  ) {
  }

  toggleColapse() {
    this.collapsed = !this.collapsed
  }

  logOut() {
    this.authService.logoutUser()
  }

}
