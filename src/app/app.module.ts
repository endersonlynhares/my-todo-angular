import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthLayoutModule} from "./core/layouts/auth-layout/auth-layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
