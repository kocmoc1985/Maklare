import {Component, ApplicationRef} from '@angular/core';

@Component({
    selector: 'buy',
    templateUrl: 'app/components/template/buy.html',
    styleUrls: ['./app/components/css/buy.css']
})

export class BuyComponent {
    searchResult: any[];

    constructor(private ref: ApplicationRef)
    {}

    onSearch(objects: any[]) { //#EVENT_EMITTER
        //#DATA_EXCHANGE
        this.searchResult = objects;
        this.ref.tick();
    }



    stringifier(ex: any) {
        return JSON.stringify(ex);
    }
}