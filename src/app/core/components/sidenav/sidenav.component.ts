import {Component, HostBinding} from '@angular/core';
import {sideNavData} from "./sidenav-data";
import {AuthService} from "../../services/auth.service";
import {User} from "../../../domain-types/models/User";
import {ThemeService} from "../../theme/theme.service";
import {Overlay, OverlayContainer} from "@angular/cdk/overlay";

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
    private themeService: ThemeService,
    private overlay: OverlayContainer
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

  @HostBinding('class') className = ""
  darkClassName = "theme-dark"
  lightClassName = "theme-light"
  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
      this.className = this.darkClassName
      this.overlay.getContainerElement().classList.add(this.darkClassName)
      this.overlay.getContainerElement().classList.remove(this.lightClassName)
    } else {
      this.themeService.setTheme('light');
      this.className = this.lightClassName
      this.overlay.getContainerElement().classList.add(this.lightClassName)
      this.overlay.getContainerElement().classList.remove(this.darkClassName)
    }
    this.activeTheme = this.themeService.getActiveTheme().name
  }

}
