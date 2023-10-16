import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";
import {AssignmentList} from "../../../domain-types/models/AssigmentList";
import {Subscription} from "rxjs";
import {FormValidations} from "../../form-validations";
import * as moment from "moment"

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.sass']
})
export class CreateTaskDialogComponent extends BaseFormComponent implements OnDestroy, OnInit {
  lists !: AssignmentList[]
  private subscription!: Subscription

  constructor(
    private buildr: FormBuilder,
    private api: ApiService
  ) {
    super()
  }

  override ngOnInit() {

    this.formulario = this.buildr.group({
      description: ['', [Validators.required, Validators.minLength(5)]],
      deadline: ['', [Validators.required, FormValidations.dateValidator()]],
      assignmentListId: ['', [Validators.required]],
      time: ['', Validators.required]
    })

    this.subscription = this.api.getAssignmentList().subscribe({
      next: (data) => {
        this.lists = data.items
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  submit() {
  }

  createTask() {
    let date: moment.Moment = moment.utc(this.formulario.get('deadline')?.value).local()
    this.formulario.value.deadline = date.format('YYYY-MM-DD') + "T" + this.formulario.get('time')?.value + ":00.000Z"
    this.api.addAssignment({
      deadline: this.formulario.value.dealine,
      assignmentListId: this.formulario.value.assignmentListId,
      description: this.formulario.value.description
    });
  }

}
