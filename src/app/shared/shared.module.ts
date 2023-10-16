import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputAuthComponent} from './input-auth/input-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonAuthComponent} from './button-auth/button-auth.component';
import {FieldControlErrorComponent} from './field-control-error/field-control-error.component';
import {CustomIconComponent} from './custom-icon/custom-icon.component';
import {CommonHeaderComponent} from './common-header/common-header.component';
import {SvgComponentsModule} from "./svg-components/svg-components-module";
import {MaterialModule} from "../core/material.module";
import {CreateTaskDialogComponent} from "./dialogs/create-task-dialog/create-task-dialog.component";
import {CreateListDialogComponent} from "./dialogs/create-list-dialog/create-list-dialog.component";
import {CommonDialogComponent} from "./dialogs/common-dialog/common-dialog.component";
import {InputDialogComponent} from "./dialogs/input-dialog/input-dialog.component";

@NgModule({
  declarations: [
    InputAuthComponent,
    ButtonAuthComponent,
    FieldControlErrorComponent,
    CustomIconComponent,
    CommonHeaderComponent,
    CreateTaskDialogComponent,
    CreateListDialogComponent,
    CommonDialogComponent,
    InputDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SvgComponentsModule,
    MaterialModule,
  ],
  exports: [
    InputAuthComponent,
    ButtonAuthComponent,
    CustomIconComponent,
    CommonHeaderComponent,
    SvgComponentsModule,
    FieldControlErrorComponent,
    CreateTaskDialogComponent,
    CreateListDialogComponent,
    CommonDialogComponent,
    InputDialogComponent
  ]
})
export class SharedModule {
}
