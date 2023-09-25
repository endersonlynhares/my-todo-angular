import { Component } from '@angular/core';
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})
export class ListsComponent {
  constructor(
    private apiService: ApiService
  ) {
  }

  logOut(){
    this.apiService.logoutUser()
  }

}
