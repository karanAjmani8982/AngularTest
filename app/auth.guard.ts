import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './Shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataShare:DataService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      // if(this.dataShare.loggedIn()){
      //   return true;
      // }
    // else{
    //   this.router.navigate(["/login-page"]);
      // return true;
    // }
      if(this.dataShare.loggedIn()){

        return true;
    }

          this.router.navigate(["/login-page"]);
    return !this.dataShare.loggedIn();
  }
  
}
