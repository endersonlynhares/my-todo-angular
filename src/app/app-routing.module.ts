import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./core/layouts/auth-layout/auth-layout.component";
import {authGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        loadChildren: () => import('./features/signin/signin.module').then(m => m.SigninModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule)
      }
    ]
  },
  {
    path: 'lists',
    loadChildren: () => import('./features/lists/lists.module').then(m => m.ListsModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
