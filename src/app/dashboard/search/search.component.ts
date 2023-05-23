import { HttpParams } from '@angular/common/http';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CityDataService } from 'src/app/services/city-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue:string|number ='Mumbai';
  constructor(public CityDataService:CityDataService){
  }
  ngOnInit(): void {
    this.searchCity(this.searchValue);
  }

  searchCity(city:string | number){
    this.searchValue = city;
    this.CityDataService.getCityData(this.searchValue).subscribe(data => {
    })
  }
}
