import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';



@NgModule({
  declarations: [
    CommonLayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
