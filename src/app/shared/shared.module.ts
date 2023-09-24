import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAuthComponent } from './input-auth/input-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonAuthComponent } from './button-auth/button-auth.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';



@NgModule({
  declarations: [
    InputAuthComponent,
    ButtonAuthComponent,
    FieldControlErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputAuthComponent,
    ButtonAuthComponent
  ]
})
export class SharedModule { }
