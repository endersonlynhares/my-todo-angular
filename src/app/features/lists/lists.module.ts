import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListsComponent} from './lists.component';
import {ListsRoutingModule} from "./lists-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "../../core/material.module";

@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class ListsModule {
}
