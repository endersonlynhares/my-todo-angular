import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./core/layouts/auth-layout/auth-layout.component";
import {authGuard} from "./core/guards/auth.guard";
import {notAuthGuard} from "./core/guards/not-auth.guard";
import {CommonLayoutComponent} from "./core/layouts/common-layout/common-layout.component";

const routes: Routes = [

  {
    path: '',
    component: CommonLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule),
      },
      {
        path: 'lists',
        loadChildren: () => import('./features/lists/lists.module').then(m => m.ListsModule),
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [notAuthGuard],
    children: [
      {
        path: 'signin',
        loadChildren: () => import('./features/signin/signin.module').then(m => m.SigninModule),
      },
      {
        path: 'signup',
        loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
