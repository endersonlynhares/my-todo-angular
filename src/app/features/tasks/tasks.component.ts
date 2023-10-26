import {ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskDialogComponent} from "../../shared/dialogs/create-task-dialog/create-task-dialog.component";
import {DataSharingService} from "../../core/services/data-sharing.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent {

  constructor(
    private newListDialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private sharedApi: DataSharingService,
  ) {

  }

  loadData(){
    // fazer o reload das tasks ao criar uma nova !! 26-10-2023
  }

  onCallParent() {
   let dialog = this.newListDialog.open(CreateTaskDialogComponent, {
      width: '750px',
      panelClass: 'dialog-colorful',
      data: {
        title: 'Cadastro de Tarefas',
      }
    })

    dialog.afterClosed().subscribe(data =>{
      if(data.createdNewTask){
        this.loadData()
      }
    })
  }

  protected readonly onscroll = onscroll;
}
