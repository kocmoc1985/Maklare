import {Component,ApplicationRef} from '@angular/core';

@Component({
    selector: 'buy',
    templateUrl: 'app/components/template/buy.html',
    styleUrls: ['./app/components/css/buy.css']
})

export class BuyComponent {
    searchResult: any[];

    onSearch(objects: any[]) { //#EVENT_EMITTER
        //#DATA_EXCHANGE
        console.log("BUY",objects);
        this.searchResult = objects;
//        this.ref.tick();
    }
    
    constructor(private ref: ApplicationRef)
    {}
    
    stringifier(ex:any){
        return JSON.stringify(ex);
    }
}