import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CityDataService {
  isApiRequest = 'https://api.openweathermap.org/data/2.5/weather?appid=555812a0c99704a47b9db67faa9ed1fa';
  public CitySubject = new Subject();
  
  constructor(private Http:HttpClient) { }

  public getCityData(c:string|number) {
    let parameter = {"q":c};
    return this.Http.get(this.isApiRequest,{params:parameter})
  }
}
