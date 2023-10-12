import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CommonLayoutComponent} from './common-layout.component';
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CommonLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgOptimizedImage,
    RouterModule
  ],
  exports: [
    CommonLayoutComponent
  ]
})
export class CommonLayoutModule {
}
