import {Component, OnInit} from '@angular/core';

import {DataService} from '../components/services/data.service';

//declare var FASTIGHETS_REST: any;
//declare function _find(param: any): any;

@Component({
    selector: 'list-app',
    templateUrl: 'app/components/template/list-search.html',
    styleUrls: ['app/components/css/list-search.css'],
    providers: [DataService]
})

export class ListSearchComponent implements OnInit {
    constructor(private dataService: DataService) {}

    objects: any[];

    ngOnInit(): void {}

    getFastigheter() {
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {area:25}
        let properties = {area:25};
        let rest = this.dataService.FASTIGHET_REST_NEW;
        
        //Calling a Promise function
        this.dataService.get(rest, properties).then(
            (data) => {
                this.objects = data;
            }
        );
    }
    
    
    getBrokers() {
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {name:"John Doe"}
        let properties = {_fields: '', _sort: 'name', _skip: 0, _limit: 3};
        let rest = this.dataService.BROKERS_REST_NEW;
        
        //Calling a Promise function
        this.dataService.get(rest, properties).then(
            (data) => {
                this.objects = data;
            }
        );
    }

}


