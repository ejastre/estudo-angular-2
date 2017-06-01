
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {
  CanActivate
  , Router
  , ActivatedRouteSnapshot
  , RouterStateSnapshot,
  CanLoad,
  Route
} from '@angular/router';

import { AuthService } from './../login/auth.service';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router

  ) {
    console.log("AuthGuard");
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
   return this.verificarAcesso();
  }

  private verificarAcesso():boolean{
    console.log("AuthGuard:  verificarAcesso  ")

     if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
    }
    return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
     console.log("canLoad:  verificarAcesso se usuário pode carregar o codigo do modulo  ")
      return this.verificarAcesso();
    }


}
