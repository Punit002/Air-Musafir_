import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class FlightSearchDateService {
  constructor() { }

  convertDate(convertDate: Date) {
    if (convertDate != null) {
      return moment(convertDate).format('DD/MM/YYYY').toString();
    } else {
      return null;
    }
  }
}
