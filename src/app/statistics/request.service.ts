import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import{map, toArray, switchMap,share} from 'rxjs/operators'
import {Observable} from 'rxjs'


interface TotalCases{
    confirmed:{
      locations:{
        country: string,
        latest: string,
        country_code:string
      }
    },
    deaths: {
      locations:{
      country:string,
      country_code:string,
      latest: string
    }},
    latest: {
      confirmed: string,
      deaths:string,
      recovered:string
    },
   
}

interface Recovered{
  
    locations:{
      country:string,
      country_code:string,
      latest: string
    },
    latest:string,
    last_updated:string
  
}

interface Deaths{
  
  locations:{
    country:string,
    country_code:string,
    latest: string
  },
  latest:string

}
interface Confirm{
  
  locations:{
    country:string,
    country_code:string,
    latest: string
  },
  latest:string

}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  rootUrl = 'https://coronavirus-tracker-api.herokuapp.com';
  constructor(private http:HttpClient) { }


  getTotalConfirmed(){
    return this.getCurrentLocation() 
    .pipe(map(coords => {
      return new HttpParams()
      
    }),
      switchMap(params => this.http.get<TotalCases>(this.rootUrl+'/all',{params}) ),
        map(value=>{
          return {
            confirmed: value.confirmed,
            deaths: value.deaths,
            latest: value.latest,
          
          };
        }),
        toArray(),
        share()


    );
  }

  getTotalRecovered(){
    return this.getCurrentLocation() 
    .pipe(map(coords => {
      return new HttpParams()
      
    }),
      switchMap(params => this.http.get<Recovered>(this.rootUrl+'/recovered',{params}) ),
        map(value=>{
          return {
            locations: value.locations,
            latest:value.latest,
            last_updated:value.last_updated
          };
        }),
        toArray(),
        share()


    );
  }

  getTotalDeath(){
    return this.getCurrentLocation() 
    .pipe(map(coords => {
      return new HttpParams()
      
    }),
      switchMap(params => this.http.get<Deaths>(this.rootUrl+'/deaths',{params}) ),
        map(value=>{
          return {
            locations: value.locations,
            latest:value.latest
          };
        }),
        toArray(),
        share()


    );
  }

  getTotalConfirm(){
    return this.getCurrentLocation() 
    .pipe(map(coords => {
      return new HttpParams()
      
    }),
      switchMap(params => this.http.get<Confirm>(this.rootUrl+'/confirmed',{params}) ),
        map(value=>{
          return {
            locations: value.locations,
            latest:value.latest
          };
        }),
        toArray(),
        share()


    );
  }


//get user location reusable any projects
getCurrentLocation() {
  return new Observable<Coordinates>((observer) => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        observer.next(position.coords);
        observer.complete();
      },
      (err) => observer.error(err)
    )

  })
}
}




