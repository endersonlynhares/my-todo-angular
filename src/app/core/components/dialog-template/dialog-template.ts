import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {BaseFormComponent} from "../../../shared/form-base/form-base";

@Component({
  selector: 'app-popup',
  templateUrl: './dialog-template.html',
  styleUrls: ['./dialog-template.sass']
})
export class DialogTemplateComponent extends BaseFormComponent implements OnInit {
  inputData!: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<DialogTemplateComponent>,
    private buildr: FormBuilder,
    private api: ApiService
  ) {
    super()
  }


  override ngOnInit() {
    this.inputData = this.data
    this.formulario = this.buildr.group({
      name: [null]
    })
  }

  override submit() {
  }

  closePopup() {
    this.ref.close()
  }

  createList() {
    this.api.addAssignmentList(this.formulario.value)
  }

}
