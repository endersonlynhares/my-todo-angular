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
    this.data.onConfirm(this.dialogRef)
  }

}
