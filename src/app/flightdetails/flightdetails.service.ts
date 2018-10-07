import { Injectable } from '@angular/core';
import { validateStyleParams } from '../../../node_modules/@angular/animations/browser/src/util';

@Injectable()
export class FlightDetailsService {
  constructor() { }

  serachResult(flightSearchedObject, flightDetailsData) {
  return flightDetailsData.filter(function(obj) {
     return Object.keys(flightSearchedObject).every(function(c, index) {
       if ( flightSearchedObject['retDate'] == null ) {
        if (c === 'passenger') {
          return obj['passenger'] >= flightSearchedObject['passenger'];
        } else {
          if (c === 'costRefine') {
            return obj['oneWayCost'] <= flightSearchedObject['costRefine'];
          } else {
            if ( c === 'retDate') {
              return true;
            } else {
              return obj[c] == flightSearchedObject[c];
            }
          }
        }
      } else {
        if (c === 'passenger') {
          return obj['passenger'] >= flightSearchedObject['passenger'];
        } else {
          if (c === 'costRefine') {
            return obj['twoWayCost'] <= flightSearchedObject['costRefine'];
          } else {
              return obj[c] == flightSearchedObject[c];
          }
      }
    }
    });
  });
  }
}
