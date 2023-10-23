import {AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {BaseFormComponent} from "../../form-base/form-base";
import {AssignmentList} from "../../../domain-types/models/AssigmentList";
import {Subscription} from "rxjs";
import {FormValidations} from "../../form-validations";
import * as moment from "moment"
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.sass']
})
export class CreateTaskDialogComponent extends BaseFormComponent implements OnDestroy, OnInit, AfterViewInit {
  lists !: AssignmentList[]
  private subscription!: Subscription
  private page: number = 1
  private maxPage!: number

  constructor(
    private buildr: FormBuilder,
    private api: ApiService
  ) {
    super()
  }

  @ViewChild('doctorSelect') selectElem!: MatSelect

  ngAfterViewInit() {
    this.selectElem.openedChange.subscribe(() => this.registerPanelScrollEvent());
  }

  override ngOnInit() {
    this.formulario = this.buildr.group({
      description: ['', [Validators.required, Validators.minLength(5)]],
      deadline: ['', [Validators.required, FormValidations.dateValidator()]],
      assignmentListId: ['', [Validators.required]],
      time: ['', Validators.required]
    })

    this.subscription = this.api.getAssignmentList(10, 1).subscribe({
      next: (data) => {
        this.lists = data.items
        this.maxPage = data.pageCount
      }
    })

  }

  registerPanelScrollEvent() {
    if (this.selectElem && this.selectElem.panel && this.selectElem.panel.nativeElement) {
      const panel = this.selectElem.panel.nativeElement;
      panel.addEventListener('scroll', (event: any) => this.loadNextOnScroll(event));
    }
  }

  loadNextOnScroll(event: any) {
    if (this.hasScrolledToBottom(event.target)) {
      this.page += 1
      console.log('Scrolled to bottom');
      if (this.page <= this.maxPage) {
        this.api.getAssignmentList(10, this.page).subscribe({
          next: data => {
            this.lists = [...this.lists, ...data.items]
          }
        })
      }
    }
  }

  loadData(pageSize: number, page: number) {
    this.api.getAssignmentList(pageSize, page).subscribe({
      next: (data) => {
        this.lists = data.items
        this.maxPage = data.pageCount
      }
    })
  }

  private hasScrolledToBottom(target: any): boolean {
    return (
      target.offsetHeight + target.scrollTop >= target.scrollHeight
    )
  }

  reset() {
    this.page = 1
    this.loadData(10, 1)
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
      deadline: this.formulario.value.deadline,
      assignmentListId: this.formulario.value.assignmentListId,
      description: this.formulario.value.description
    });
  }

}
