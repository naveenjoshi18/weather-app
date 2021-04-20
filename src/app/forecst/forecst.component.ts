import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import {FormControl, FormGroup} from "@angular/forms"


@Component({
  selector:'app-forecst',
  templateUrl:  './forecst.component.html',
  styleUrls: ['./forecst.component.css']
})
export class ForecstComponent implements OnInit {

  public Cdata=[] as any;
  cities=["Bangalore","Hospet","New York","San Fransisco","Pune"];
  
  //public cities:Array<ICities>=[{name:"Banglore"},{name:"Hospet"},{name:"New York"}];

  contactForm!:FormGroup;
  
  selected:FormControl= new FormControl()
  
  constructor(private ForecastService:ForecastService) { }

  // calling method in service.ts to fetch API
  getCity(selected:any){
  let selectedcity=selected
  console.log(typeof(selectedcity))

  this.ForecastService.getweather(selectedcity)
  .subscribe(data => this.Cdata=data);
}

//Adding the cities
addCity(value:any){
  if( value!=""){
    this.cities.push(value);
    console.log(this.cities)
  }else{
    alert("Add a City!!")
  }


  localStorage.setItem("data",JSON.stringify(this.cities));

}

//Deleting the cities
delCity(value:any){
  for(let i=0;i<this.cities.length;i++){
    if(this.cities[i]==value){
      this.cities.splice(i,1)
    }
  }
  console.log(this.cities)
}
 


  ngOnInit() {
  
  }
    
  }


