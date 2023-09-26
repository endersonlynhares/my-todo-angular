import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {AuthLayoutModule} from "./layouts/auth-layout/auth-layout.module";
import {CommonLayoutModule} from "./layouts/common-layout/common-layout.module";
import {ComponentsModule} from "./components/components.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthLayoutModule,
    CommonLayoutModule,
    ComponentsModule
  ]
})
export class CoreModule {
}
