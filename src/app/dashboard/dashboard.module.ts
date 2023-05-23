import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CitiDataComponent } from './citi-data/citi-data.component';
import { HourlyForcastComponent } from './hourly-forcast/hourly-forcast.component';
import { CitiMapComponent } from './citi-map/citi-map.component';
import { FutureForcastComponent } from './future-forcast/future-forcast.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    CitiDataComponent,
    HourlyForcastComponent,
    CitiMapComponent,
    FutureForcastComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
