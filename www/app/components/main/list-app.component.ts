import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../services/data.service';
import {DataExchange} from '../services/dataExchange.service';

declare function isEqual(obj: any, obj2: any): any;

//declare var FASTIGHETS_REST: any;
//declare function _find(param: any): any;

@Component({
    selector: 'list-app',
    templateUrl: 'app/components/template/list-search.html',
    styleUrls: ['app/components/css/list-search.css'],
    providers: [DataService, DataExchange]
})

export class ListSearchComponent {
    //#DATA_EXCHANGE
    @Input('estates') objects: any[];

    private localMem: any;

    constructor(
        private dataService: DataService,
        private dataExchange: DataExchange,
        private router: Router
    ) {
        this.localMem = this.dataExchange.create(this);
    }

    private selectedHoverObject: any;

    showDetailedView(object: any) {
        //#ROUTING_DETAILED
        this.localMem.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
    }

    over(object: any) {
        this.selectedHoverObject = object;
    }

    leave() {
        this.selectedHoverObject = null;
    }

    formatDate(date: String) {
        return date.substring(0, 10);
    }

    equals(selectedObj: any, obj: any) {
        if (!selectedObj || !obj) {
            return false;
        }
       
        if (selectedObj._id && obj._id) {
            if (selectedObj._id == obj._id) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * @deprecated
     */
    getBrokers() {
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {name:"John Doe"}
        let properties = {_fields: '', _sort: 'name', _skip: 0, _limit: 3};
        let rest = this.dataService.BROKERS_REST_NEW;

        //Calling a Promise function
        //#PROMISE
        this.dataService.get(rest, properties).then(
            (data) => {
                this.objects = data;
            }
        );
    }

}


