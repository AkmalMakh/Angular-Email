import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';



interface Data {
 

  country: string,
  country_code: string,
  latest: string

}

@Component({
  selector: 'app-total-confirmed',
  templateUrl: './total-confirmed.component.html',
  styleUrls: ['./total-confirmed.component.css']
})
export class TotalConfirmedComponent implements OnInit {

  totalNumber: string;
  latest : number;
  ListOfCountries: Data;

  constructor(private requestService: RequestService) { 
    this.requestService.getTotalConfirm()
    .subscribe((total)=>{
     this.totalNumber = total[0].latest;
     this.totalNumber=this.numberWithCommas(parseInt(this.totalNumber));
     this.ListOfCountries = total[0].locations;
    
    
    });
  }
  numberWithCommas(x:number):string{
    let y = x.toString().split(".");
    y[0] = y[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return y.join("."); 
  }
  
  ngOnInit() {
  
  }


}
