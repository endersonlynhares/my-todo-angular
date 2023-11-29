import {Component} from '@angular/core';
import {sideNavData} from "./sidenav-data";
import {AuthService} from "../../services/auth.service";
import {User} from "../../../domain-types/models/User";
import {ThemeService} from "../../theme/theme.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  collapsed: boolean = false
  sideNavData = sideNavData
  user: User | null
  activeTheme!: string

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {
    this.user = authService.getUser()
    this.activeTheme = this.themeService.getActiveTheme().name
  }

  toggleColapse() {
    this.collapsed = !this.collapsed
  }

  logOut() {
    this.authService.logoutUser()
  }


  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
    this.activeTheme = this.themeService.getActiveTheme().name
  }

}
