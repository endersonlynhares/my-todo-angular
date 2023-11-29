import {Component} from '@angular/core';
import {TokenInterceptorService} from "./core/services/token-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ThemeService} from "./core/theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'my-todo-angular';
}
