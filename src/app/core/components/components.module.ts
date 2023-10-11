import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SidenavComponent} from './sidenav/sidenav.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {DialogTemplateComponent} from "./dialog-template/dialog-template";

@NgModule({
  declarations: [
    SidenavComponent,
    DialogTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive,
    SharedModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class ComponentsModule {
}
