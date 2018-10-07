import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FlightHeaderModule } from './flightheader/flightheader.module';
import { FlightSearchModule } from './flightsearch/flightsearch.module';
import { FlightDetailsModule } from './flightdetails/flightdetails.module';
import { FlightSearchService } from './shared/services/flightSearch.service';
import { FlightSearchDateService } from './shared/services/flightSearchDate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlightHeaderModule,
    FlightSearchModule,
    FlightDetailsModule
  ],
  providers: [FlightSearchService,
    FlightSearchDateService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
