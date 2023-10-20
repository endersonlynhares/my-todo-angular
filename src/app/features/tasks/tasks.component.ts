import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskDialogComponent} from "../../shared/dialogs/create-task-dialog/create-task-dialog.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent {


  constructor(
    private newListDialog: MatDialog,
  ) {

  }

  onCallParent() {
    this.newListDialog.open(CreateTaskDialogComponent, {
      width: '750px',
      panelClass: 'dialog-colorful',
      data: {
        title: 'Cadastro de Tarefas'
      }
    })
  }

  protected readonly onscroll = onscroll;
}
