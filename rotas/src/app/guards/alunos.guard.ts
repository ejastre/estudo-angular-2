import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class AlunosGuard implements CanActivateChild {
   
   	canActivateChild(
           route: ActivatedRouteSnapshot,
           state: RouterStateSnapshot
       ): Observable<boolean>|Promise<boolean>|boolean {

           console.log("AlunosGuard: guarda de rotas filha");
          if(state.url.includes("editar"))
          {
             
          }
           return true;
       }


}