import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {ApiService} from "../../core/services/api.service";
import {AssignmentList} from "../../domain-types/models/AssigmentList";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})
export class ListsComponent implements OnInit {
  lists!: AssignmentList

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.api.getAssignmentList()
  }

  onCallParent() {
    console.log('component lista')
  }
}
