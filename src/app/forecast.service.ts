import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http:HttpClient) { }
  
  getweather(selectedcity:string): Observable<any>{
    return this.http.get<any>(`http://api.weatherapi.com/v1/forecast.json?key=ca8fb44241904004b60154125211904&q=${selectedcity}&aqi=no `)
         
  }



}
