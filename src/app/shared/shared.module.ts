import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAuthComponent } from './input-auth/input-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonAuthComponent } from './button-auth/button-auth.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';



@NgModule({
  declarations: [
    InputAuthComponent,
    ButtonAuthComponent,
    FieldControlErrorComponent,
    CustomIconComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
    exports: [
        InputAuthComponent,
        ButtonAuthComponent,
        CustomIconComponent
    ]
})
export class SharedModule { }
