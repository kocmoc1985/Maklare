import {Component} from '@angular/core';

@Component({
    selector: 'buy',
    templateUrl: 'app/components/template/buy.html'
})

export class BuyComponent {
    searchResult: any[];

    onSearch(objects: any[]) { //#EVENT_EMITTER
        //#DATA_EXCHANGE
        this.searchResult = objects;
    }
}