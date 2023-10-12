import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {AssignmentList} from "../../domain-types/models/AssigmentList";
import {MatDialog} from "@angular/material/dialog";
import {CreateListDialogComponent} from "../../shared/dialogs/create-list-dialog/create-list-dialog.component";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})
export class ListsComponent implements OnInit {
  lists!: AssignmentList

  constructor(
    private api: ApiService,
    private newListDialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.api.getAssignmentList()
  }

  onCallParent() {
    this.newListDialog.open(CreateListDialogComponent, {
      width: '750px',
      panelClass: 'dialog-colorful',
      data: {
        title: 'Create List'
      }
    })
  }
}
