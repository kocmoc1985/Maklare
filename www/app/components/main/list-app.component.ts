import {Component, OnInit} from '@angular/core';
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

export class ListSearchComponent implements OnInit {
    constructor(
        private dataService: DataService,
        private router: Router
    ) {}

    private objects: any[];
    private selectedObject: any;
    private clicked: boolean;

    ngOnInit(): void {}

    showDetailedView(object: any) {
        //#ROUTING_DETAILED
        this.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
    }

    getFastigheter() {
        this.clicked = true;
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {area:25}
        let properties = {_fields: '', _sort: 'name', _skip: 0, _limit: 3};
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
                //                this.images = this.objects.images; // How to get images?
            }
        );
    }

}

