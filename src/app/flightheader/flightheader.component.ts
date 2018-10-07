import { Component, OnInit } from '@angular/core';
import { flightConstants } from '../shared/constant/flight.constant';
@Component({
    selector: 'app-flight-header',
    templateUrl: './flightheader.component.html',
    styleUrls: ['./flightheader.component.scss']
})

export class FlightHeaderComponent implements OnInit {

    flightHeader: string = null;
    constructor() {
    }

    ngOnInit(): void {
        this.flightHeader = flightConstants.flightHeaderTitle;
    }
}
