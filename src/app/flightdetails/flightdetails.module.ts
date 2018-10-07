import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightDetailsComponent } from './flightdetails.component';
import { FlightDetailsService } from './flightdetails.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      FlightDetailsComponent
  ],
  exports: [
      FlightDetailsComponent
  ],
  providers: [
    FlightDetailsService
  ]
})
export class FlightDetailsModule {
}
