import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { Ng5SliderModule } from 'ng5-slider';


import { FlightSearchComponent } from './flightsearch.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateInputsModule,
    GaugesModule,
    Ng5SliderModule,
  ],
  declarations: [
      FlightSearchComponent
  ],
  exports: [
      FlightSearchComponent,
      ReactiveFormsModule,
      DateInputsModule,
      GaugesModule,
      Ng5SliderModule,
  ]
})
export class FlightSearchModule {
}
