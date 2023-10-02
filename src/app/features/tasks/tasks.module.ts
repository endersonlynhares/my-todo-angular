import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TasksRoutingModule} from "./tasks-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    TasksComponent,
    FilterComponent
  ],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule
    ]
})
export class TasksModule {
}
