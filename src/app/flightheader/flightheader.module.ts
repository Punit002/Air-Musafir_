import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightHeaderComponent } from './flightheader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      FlightHeaderComponent
  ],
  exports: [
    FlightHeaderComponent
  ]
})
export class FlightHeaderModule {
}
