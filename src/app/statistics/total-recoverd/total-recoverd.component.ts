import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';



interface Data {
 

    country: string,
    country_code: string,
    latest: string,
   
  }



@Component({
  selector: 'app-total-recoverd',
  templateUrl: './total-recoverd.component.html',
  styleUrls: ['./total-recoverd.component.css']
})
export class TotalRecoverdComponent implements OnInit {

  totalNumberRecovered: string;
  ListOfCountries: Data;
  lastUpdate:string;

  constructor(private requestService: RequestService) { 
    this.requestService.getTotalRecovered()
    .subscribe((total)=>{
     this.totalNumberRecovered = total[0].latest;
     this.totalNumberRecovered=this.numberWithCommas(parseInt(this.totalNumberRecovered));
     this.ListOfCountries = total[0].locations;
      this.lastUpdate = total[0].last_updated;
    
    });
  }

  numberWithCommas(x:number):string{
    let y= x.toString().split(".");
    y[0] = y[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return y.join(".");
  }
  ngOnInit() {
  }

}
