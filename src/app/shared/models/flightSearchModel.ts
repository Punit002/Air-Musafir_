export class FlightSearchModel {
    originCity: string;
    destCity: string;
    deptDate: string;
    retDate: string;
    passenger: number;
    costRefine: number;

    constructor() {
        this.originCity = null;
        this.destCity = null;
        this.deptDate = null;
        this.retDate = null;
        this.passenger = 1;
        this.costRefine = 0;
    }
 }
