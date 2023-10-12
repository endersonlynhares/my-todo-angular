import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.sass']
})
export class CreateTaskDialogComponent extends BaseFormComponent {
  constructor(
    private buildr: FormBuilder,
    private api: ApiService
  ) {
    super()
  }

  override ngOnInit() {
    this.formulario = this.buildr.group({
      description: [null],
      deadline: [null],
      assignmentListId: [null]
    })
  }

  submit() {
  }

  createTask() {
    this.api.addAssignment(this.formulario.value)
    console.log(this.formulario.value)
  }
}
