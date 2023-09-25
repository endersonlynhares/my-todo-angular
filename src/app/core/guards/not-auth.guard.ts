import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const notAuthGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAuthenticated) {
    inject(Router).navigate(['']).then()
    return false
  }

  return true
};
