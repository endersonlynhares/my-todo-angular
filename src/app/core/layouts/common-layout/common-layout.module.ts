import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CommonLayoutComponent} from './common-layout.component';
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../../components/components.module";
import {ThemeModule} from "../../theme/theme.module";

@NgModule({
  declarations: [
    CommonLayoutComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        NgOptimizedImage,
        RouterModule,
        ThemeModule
    ],
  exports: [
    CommonLayoutComponent
  ]
})
export class CommonLayoutModule {
}
