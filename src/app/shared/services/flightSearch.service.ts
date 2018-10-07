import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FlightSearchModel } from '../models/flightSearchModel';

@Injectable()
export class FlightSearchService {
  constructor() { }

  public flightSearchMessage = new BehaviorSubject<FlightSearchModel>(null);
  addFlightSearchObj(flightSearchObj: FlightSearchModel) {
      this.flightSearchMessage.next(flightSearchObj);
  }
}
