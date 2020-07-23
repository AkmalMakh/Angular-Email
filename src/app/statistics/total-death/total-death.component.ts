import { Component, OnInit } from '@angular/core';
import {RequestService } from '../request.service';



interface Data {
  country: string,
  country_code: string,
  latest: string
}

@Component({
  selector: 'app-total-death',
  templateUrl: './total-death.component.html',
  styleUrls: ['./total-death.component.css']
})
export class TotalDeathComponent implements OnInit {
  
  totalNumberDeath: string;
  ListOfCountries: Data;

  constructor(private requestService: RequestService) { 
    this.requestService.getTotalDeath()
    .subscribe((total)=>{
     this.totalNumberDeath = total[0].latest;
     this.totalNumberDeath=this.numberWithCommas(parseInt(this.totalNumberDeath));
    this.ListOfCountries = total[0].locations;
    
    });
  }
  
  numberWithCommas(x:number):string {
    let y;
    y = x.toString().split('.');
    y[0] =y[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return y.join(".");
}
  ngOnInit() {
  }

}
