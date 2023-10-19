import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import Swal from "sweetalert2"

@Component({
  selector: 'app-create-list-dialog',
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialogComponent extends BaseFormComponent implements OnInit {
  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super()
  }

  override ngOnInit() {
  }

  submit() {
  }

  confirm() {
    this.api.deleteAssignmentList(this.data.list.id).subscribe({
      next: data => {
        Swal.fire(
          'Lista deletada com sucessoo!',
          `A lista ${this.data.list.name} foi removida com sucesso`,
          'success'
        ).then()
        this.dialogRef.close({removedList: true})
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
}

// e2024646-cc42-46aa-973e-11bcdbe4fa85
