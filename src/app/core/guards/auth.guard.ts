import {CanActivateFn, Router} from '@angular/router';
import {ApiService} from "../services/api.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(ApiService).isAuthenticated) {
    return true
  }

  inject(Router).navigate(['/signin']).then()

  return false;
};
