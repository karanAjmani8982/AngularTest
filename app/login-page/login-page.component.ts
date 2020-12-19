import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Shared/data.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  Username;
  Password;

  constructor(private router:Router,private dataShare:DataService, public translate: TranslateService) { 
    translate.addLangs(['English', 'Hindi']);
    translate.setDefaultLang('English');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    if(this.router.url === '/login-page'){
      console.log(this.router.url);
      this.dataShare.getUrls(this.router.url);
    }
  }

  toMenu(){
    // if((this.Username === 'a' || this.Username === 'Karan') && this.Password === 'a'){
      this.router.navigate(['/menu']);
      this.dataShare.login();
      localStorage.setItem('lgnVariable',this.dataShare.IsLoggedIn)
    // }
  }

}
