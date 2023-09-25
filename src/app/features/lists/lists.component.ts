import {Component} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})
export class ListsComponent {
  constructor(
    private authService: AuthService
  ) {
  }

  logOut() {
    this.authService.logoutUser()
  }

}
