import { HttpParams } from '@angular/common/http';
import { Component,Input,OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CityDataService } from 'src/app/services/city-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchValue:string|number ='Mumbai';
  cityData:any;
  constructor(public CityDataService:CityDataService){
  }
  ngOnInit(): void {
    this.searchCity(this.searchValue);
  }

  searchCity(city:string | number){
    this.searchValue = city;
    this.CityDataService.getCityData(this.searchValue).subscribe(data => {
      this.cityData =data;
    })
  }
}
