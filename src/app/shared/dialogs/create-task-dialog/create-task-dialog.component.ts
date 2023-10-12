import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";
import {AssignmentList} from "../../../domain-types/models/AssigmentList";
import {Subscription} from "rxjs";

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

    this.subscription = this.api.getAssignmentList().subscribe({
      next: (data) => {
        this.lists = data.items
      }
    })

    this.formulario = this.buildr.group({
      description: [null],
      deadline: [null],
      assignmentListId: [null]
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  submit() {
  }

  createTask() {
    let date = new Date(this.formulario.get('deadline')?.value).toISOString()
    this.api.addAssignment({...this.formulario.value, deadline: date})
  }
}
