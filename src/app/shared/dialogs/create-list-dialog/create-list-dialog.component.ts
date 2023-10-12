import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";

@Component({
  selector: 'app-create-list-dialog',
  templateUrl: './create-list-dialog.component.html',
  styleUrls: ['./create-list-dialog.component.sass']
})
export class CreateListDialogComponent extends BaseFormComponent implements OnInit {
  constructor(
    private buildr: FormBuilder,
    private api: ApiService
  ) {
    super()
  }

  override ngOnInit() {
    this.formulario = this.buildr.group({
      name: [null]
    })
  }

  submit() {
  }

  createList() {
    this.api.addAssignmentList(this.formulario.value)
  }
}
