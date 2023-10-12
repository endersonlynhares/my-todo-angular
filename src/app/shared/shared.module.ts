import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputAuthComponent} from './input-auth/input-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonAuthComponent} from './button-auth/button-auth.component';
import {FieldControlErrorComponent} from './field-control-error/field-control-error.component';
import {CustomIconComponent} from './custom-icon/custom-icon.component';
import {CommonHeaderComponent} from './common-header/common-header.component';
import {SvgComponentsModule} from "./svg-components/svg-components-module";
import {PopupComponent} from './popup/popup.component';
import {MaterialModule} from "../core/material.module";
import {DialogsModule} from "./dialogs/dialogs.module";

@NgModule({
  declarations: [
    InputAuthComponent,
    ButtonAuthComponent,
    FieldControlErrorComponent,
    CustomIconComponent,
    CommonHeaderComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SvgComponentsModule,
    MaterialModule,
    DialogsModule
  ],
  exports: [
    InputAuthComponent,
    ButtonAuthComponent,
    CustomIconComponent,
    CommonHeaderComponent,
    SvgComponentsModule,
  ]
})
export class SharedModule {
}
