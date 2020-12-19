import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Shared/data.service';
import jsonData  from '../shared/jsonData.json';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data:any = [];
  dataFiltered:any = [];
  searchLanguageName: any;

  constructor(private router:Router,private dataShare:DataService) {
    this.data = jsonData;
    this.dataFiltered = jsonData;
    this.searchLanguageName = null;
    console.log(this.data);
   }

  ngOnInit() {
    if(this.router.url === '/form'){
      console.log(this.router.url);
      this.dataShare.getUrls(this.router.url);
    }
  }

  searchText(searchLanguageName){
    console.log(this.searchLanguageName);
    console.log(this.data.length)
    if(this.searchLanguageName){
      for(let i=0;i<this.data.length;i++){
        console.log()
          const result = (this.data.filter(grp =>
          ( grp.name.toLowerCase().includes(searchLanguageName.toLowerCase())) ||
          (grp.username.toLowerCase().includes(searchLanguageName.toLowerCase())) ||
          (grp.email.toLowerCase().includes(searchLanguageName.toLowerCase())) ));
          
          
          console.log(result);
          this.dataFiltered = result;
        
      }
    }
   
      else{
        this.dataFiltered = this.data;
      }
    
  }

}
