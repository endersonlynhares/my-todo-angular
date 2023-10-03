import {Component} from '@angular/core';
import {sideNavData} from "./sidenav-data";
import {AuthService} from "../../services/auth.service";
import {User} from "../../../domain-types/models/User";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  collapsed: boolean = false
  sideNavData = sideNavData
  user: User | null

  constructor(
    private authService: AuthService
  ) {
    this.user = authService.getUser()
  }

  toggleColapse() {
    this.collapsed = !this.collapsed
  }

  logOut() {
    this.authService.logoutUser()
  }

}
