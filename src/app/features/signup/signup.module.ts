import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup.component';
import {SignupRoutingModule} from "./signup-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SignupComponent
  ],
    imports: [
        CommonModule,
        SignupRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SignupModule {
}
