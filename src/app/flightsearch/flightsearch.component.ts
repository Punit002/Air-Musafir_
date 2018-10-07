import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Options } from 'ng5-slider';

import { flightConstants } from '../shared/constant/flight.constant';
import { FlightSearchModel } from '../shared/models/flightSearchModel';
import { FlightSearchService } from '../shared/services/flightSearch.service';
import { FlightSearchDateService } from '../shared/services/flightSearchDate.service';

@Component({
    selector: 'app-flight-search',
    templateUrl: './flightsearch.component.html',
    styleUrls: ['./flightsearch.component.scss']
})

export class FlightSearchComponent implements OnInit {

    defualtTabActive = true;
    cityData: any;
    maxPassenger = flightConstants.maxPassenger;
    flightSearchForm: any;
    sliderValue = 0;
    minDateFlightSearch;
    sliderOptions: Options = {
    floor: 0,
    ceil: 10000
    };
    flightSearchModelObj: FlightSearchModel;
    flightSearchFormValidation: boolean;
    constructor(private httpClient: HttpClient, private flightSearchServ: FlightSearchService,
        private flightSearchDateServ: FlightSearchDateService) {

    }
    ngOnInit(): void {
        this.httpClient.get(flightConstants.cityDataUrl).subscribe(data  => {
            this.cityData = data;
        });
        this.createFormGroup();
        this.flightSearchFormValidation = false;
    }

    createFormGroup() {
        this.flightSearchForm = new FormGroup({
            originCity: new FormControl(null, Validators.required ),
            destCity: new FormControl(null, Validators.required ),
            deptDate: new FormControl(null, Validators.required ),
            retDate: new FormControl(null),
            passengers: new FormControl('1')
        });
    }
    changeTabActive() {
        this.defualtTabActive = !this.defualtTabActive;
        if (!this.defualtTabActive) {
            this.flightSearchForm.controls['retDate'].setValidators([Validators.required]);
        } else {
            this.flightSearchForm.controls['retDate'].setValidators([]);
        }
        this.flightSearchForm.reset({ passengers: 1});
        this.sliderValue = 0;
        this.flightSearchModelObj = null;
        this.flightSearchServ.addFlightSearchObj(this.flightSearchModelObj);
        this.flightSearchFormValidation = false;
    }

    onPassengerFieldKeyPress(evt) {
        evt.preventDefault();
    }
    onFlightSearchSubmit() {
        if (this.flightSearchForm.valid) {
            this.flightSearchModelObj = new FlightSearchModel();
            this.flightSearchModelObj.originCity = this.flightSearchForm.controls['originCity'].value;
            this.flightSearchModelObj.destCity = this.flightSearchForm.controls['destCity'].value;
            this.flightSearchModelObj.deptDate = this.flightSearchDateServ.convertDate(this.flightSearchForm.controls['deptDate'].value);
            this.flightSearchModelObj.retDate = this.flightSearchDateServ.convertDate(this.flightSearchForm.controls['retDate'].value);
            this.flightSearchModelObj.passenger = this.flightSearchForm.controls['passengers'].value;
            this.flightSearchModelObj.costRefine = this.sliderValue;
            this.flightSearchServ.addFlightSearchObj(this.flightSearchModelObj);
            this.flightSearchFormValidation = false;
        } else {
            this.flightSearchFormValidation = true;
            this.flightSearchModelObj = null;
            this.flightSearchServ.addFlightSearchObj(this.flightSearchModelObj);
        }
    }
}
