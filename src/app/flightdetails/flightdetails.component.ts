import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FlightSearchService } from '../shared/services/flightSearch.service';
import { FlightSearchModel } from '../shared/models/flightSearchModel';
import { flightConstants } from '../shared/constant/flight.constant';
import { FlightDetailsService } from './flightdetails.service';

@Component({
    selector: 'app-flight-details',
    templateUrl: './flightdetails.component.html',
    styleUrls: ['./flightdetails.component.scss']
})

export class FlightDetailsComponent implements OnInit {

    flightSearchedObject: FlightSearchModel;
    flightDetailsData: any;
    resultData: any;
    constructor(private httpClient: HttpClient, private flightSearchServ: FlightSearchService,
    private flightDetailsServ: FlightDetailsService) {
    }
    ngOnInit(): void {
       this.flightSearchServ.flightSearchMessage.subscribe(data => {
            this.flightSearchedObject = data;
            if (this.flightSearchedObject) {
                this.resultData = this.flightDetailsServ.serachResult(this.flightSearchedObject, this.flightDetailsData);
                if (this.resultData.length === 0) {
                    this.resultData = null;
                }
            } else {
                this.resultData = null;
            }
       });

       this.httpClient.get(flightConstants.flightDetailsData).subscribe(data => {
        this.flightDetailsData = data;
       });
    }
}
