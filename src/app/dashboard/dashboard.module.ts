import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiDataComponent } from './citi-data/citi-data.component';
import { HourlyForcastComponent } from './hourly-forcast/hourly-forcast.component';
import { CitiMapComponent } from './citi-map/citi-map.component';
import { FutureForcastComponent } from './future-forcast/future-forcast.component';



@NgModule({
  declarations: [
    CitiDataComponent,
    HourlyForcastComponent,
    CitiMapComponent,
    FutureForcastComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
