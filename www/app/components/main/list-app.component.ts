import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../services/data.service';

//declare var FASTIGHETS_REST: any;
//declare function _find(param: any): any;

@Component({
    selector: 'list-app',
    templateUrl: 'app/components/template/list-search.html',
    styleUrls: ['app/components/css/list-search.css'],
    providers: [DataService]
})

export class ListSearchComponent {
    //#DATA_EXCHANGE
    @Input('estates') objects: any[];
    
    constructor(
        private dataService: DataService,
        private router: Router
    ) {}

    private selectedObject: any;

    showDetailedView(object: any) {
        //#ROUTING_DETAILED
        this.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
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


