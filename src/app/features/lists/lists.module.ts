import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListsComponent} from './lists.component';
import {ListsRoutingModule} from "./lists-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListsComponent
  ],
    imports: [
        CommonModule,
        ListsRoutingModule,
        SharedModule
    ]
})
export class ListsModule {
}
