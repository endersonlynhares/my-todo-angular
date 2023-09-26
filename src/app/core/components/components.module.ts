import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SidenavComponent} from './sidenav/sidenav.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage
  ],
  exports: [
    SidenavComponent
  ]
})
export class ComponentsModule {
}
