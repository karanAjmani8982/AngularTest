import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //get URL
  private getUrl = new BehaviorSubject<any>('login-page');
  //get observable url
  obgetUrl = this.getUrl.asObservable();

  //for auth guard
  IsLoggedIn :any;
  userBoolean = new BehaviorSubject<boolean>(false);

  constructor() {
    this.IsLoggedIn = false;
   }

  getUrls(url : string){
    this.getUrl.next(url);
  }

  login() {
    this.IsLoggedIn = !this.IsLoggedIn;
    this.userBoolean.next(this.IsLoggedIn);
  }

  loggedIn(){
    const valueOfLocalStorage = localStorage.getItem("lgnVariable");
    return !!localStorage.getItem("lgnVariable");
  }
}
