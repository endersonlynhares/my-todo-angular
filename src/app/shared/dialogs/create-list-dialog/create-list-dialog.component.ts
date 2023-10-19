import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";
import {MatDialogRef} from "@angular/material/dialog";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-list-dialog',
  templateUrl: './create-list-dialog.component.html',
  styleUrls: ['./create-list-dialog.component.sass']
})
export class CreateListDialogComponent extends BaseFormComponent implements OnInit {
  constructor(
    private buildr: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<CreateListDialogComponent>
  ) {
    super()
  }

  override ngOnInit() {
    this.formulario = this.buildr.group({
      name: [null, [Validators.required, Validators.minLength(5)]]
    })
  }

  submit() {
  }

  createList() {
    this.api.addAssignmentList(this.formulario.value).subscribe({
      next: data => {
        this.dialogRef.close({createdNewList: true})
        Swal.fire(
          'Lista criada com sucesso',
          '',
          'success'
        ).then()

      },
      error: err => console.log(err.message)
    })
  }
}
