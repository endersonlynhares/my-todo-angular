import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from "../../../domain-types/models/Assignment";
import {DatePipe} from "@angular/common";
import {getSituation, SituationColor} from "../../../utils/situation-card";
import {ApiService} from "../../../core/services/api.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../shared/dialogs/confirm-dialog/confirm-dialog";
import Swal from "sweetalert2";
import {DataSharingService} from "../../../core/services/data-sharing.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit{
  showActions: boolean = false
  @Input() task!: Assignment

  constructor(
    private apiService: ApiService,
    private sharedApi: DataSharingService,
    private dialog: MatDialog
  ) {
  }

  onShowActions() {
    this.showActions = !this.showActions
  }

  ngOnInit(){
    this.sharedApi.currentId.subscribe(data => console.log(data))
  }

  formatDate(dateString: string) {
    const date = new Date(dateString)
    return new DatePipe('pt-BR').transform(date, 'dd MMMM, HH:mm')
  }

  onEdit() {
    return "vai da bom ein"
  }


  onRemove() {

    const onConfirm = (dialogRef: MatDialogRef<ConfirmDialogComponent>) => {
      this.apiService.deleteAssignment(this.task.id).subscribe({
        next: () => {
          Swal.fire(
            'Tarefa deletada com sucessoo!',
            `A tarefa ${this.task.description} foi removida com sucesso`,
            'success'
          ).then()
          dialogRef.close({removedTask: true})
        },
        error: err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error['erros'],
          }).then()
          console.log(err)
        }
      })
    }

    let dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '750px',
      data: {
        title: 'Remover Tarefa',
        onConfirm: onConfirm
      }
    })

    dialog.afterClosed().subscribe(data => {
      if (data?.removedTask) {
        this.sharedApi.currentId.subscribe(data => {
          this.sharedApi.loadTasks(data)
        })
      }
    })
  }

  protected readonly getSituation = getSituation;
  protected readonly SituationColor = SituationColor;
}
