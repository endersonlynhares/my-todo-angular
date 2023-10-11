import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {BaseFormComponent} from "../form-base/form-base";
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent extends BaseFormComponent implements OnInit {
  inputData!: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<PopupComponent>,
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
