import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TasksRoutingModule} from "./tasks-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../../core/material.module";
import {MatDatepickerModule} from "@angular/material/datepicker";


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
    SharedModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MaterialModule,
    MatDatepickerModule
  ]
})
export class TasksModule {
}
