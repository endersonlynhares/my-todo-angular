import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonDialogComponent} from './common-dialog/common-dialog.component';
import {CreateTaskDialogComponent} from './create-task-dialog/create-task-dialog.component';
import {CreateListDialogComponent} from './create-list-dialog/create-list-dialog.component';
import {MaterialModule} from "../../core/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputDialogComponent} from "./input-dialog/input-dialog.component";

@NgModule({
  declarations: [
    CommonDialogComponent,
    CreateTaskDialogComponent,
    CreateListDialogComponent,
    InputDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateTaskDialogComponent,
    CreateListDialogComponent
  ]
})
export class DialogsModule {
}
