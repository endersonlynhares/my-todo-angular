import {Component} from '@angular/core';
import {sideNavData} from "./sidenav-data";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  collapse: boolean = false
  sideNavData = sideNavData
}
