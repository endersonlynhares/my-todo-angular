import {NgModule} from "@angular/core";
import {AuthLayoutComponent} from "./auth-layout.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations:[
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage
  ],
  exports:[
    AuthLayoutComponent,
    NgOptimizedImage
  ]
})
export class AuthLayoutModule {}
