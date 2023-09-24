import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAuthComponent } from './input-auth/input-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonAuthComponent } from './button-auth/button-auth.component';



@NgModule({
  declarations: [
    InputAuthComponent,
    ButtonAuthComponent
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
