import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityDataService } from './services/city-data.service';
import { TokenInterceService } from './services/token-interce.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CityDataService,{
    provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterceService, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
