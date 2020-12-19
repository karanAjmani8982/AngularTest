import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Shared/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,private dataShare:DataService) { }

  ngOnInit() {
    if(this.router.url === '/menu'){
      console.log(this.router.url);
      this.dataShare.getUrls(this.router.url);
    }
  }

  toForm(){
    this.router.navigate(['/form']);
  }

}
