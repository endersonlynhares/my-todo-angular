import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-list-dialog',
  templateUrl: './edit-list-dialog.component.html',
  styleUrls: ['./edit-list-dialog.component.sass']
})
export class EditListDialogComponent extends BaseFormComponent implements OnInit {
  constructor(
    private buildr: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<EditListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super()
  }

  override ngOnInit() {
    this.formulario = this.buildr.group({
      name: [this.data.list.name, [Validators.required, Validators.minLength(5)]]
    })
  }

  submit() {
  }

  editList() {
    this.api.updateAssignmentList(this.formulario.value, this.data.list.id).subscribe({
      next: data => this.dialogRef.close({updatedList: true}),
      error: err => console.log(err)
    })
  }
}
// e2024646-cc42-46aa-973e-11bcdbe4fa85
