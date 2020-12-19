import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  secondHeaderCondition:boolean;
  currentUrl;

  constructor(private router:Router,private datashare:DataService) {
    this.secondHeaderCondition = false;
   }

  ngOnInit() {
    this.datashare.obgetUrl.subscribe((res) => {
      // console.log("inside datashare");
      // console.log(res);

      switch(res){
        case '/login-page':
          this.secondHeaderCondition = false;
          // console.log("inside login case");
          break;

        case '/menu':
          this.secondHeaderCondition = true;
          // console.log("inside menu case");
          this.currentUrl = res;
          break;

          case '/form':
            this.secondHeaderCondition = true;
            // console.log("inside form case");
            this.currentUrl = res;
            break;

            default:
              this.secondHeaderCondition = false;
              // console.log("inside default case");
              break;
      }
    })
  }

  logout(){
    this.router.navigate(["/login-page"]);
    localStorage.clear();
    // this.dataShare.login();
  }

}
