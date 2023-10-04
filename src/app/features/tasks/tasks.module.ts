import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TasksRoutingModule} from "./tasks-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    TasksComponent,
    FilterComponent,
    CardComponent,
    CardsComponent
  ],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule
    ]
})
export class TasksModule {
}
