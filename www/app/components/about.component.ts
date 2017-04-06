import { Component, OnInit } from '@angular/core';

import {DataService} from '../components/services/data.service';

@Component({
    selector: 'about',
    templateUrl: 'app/components/template/about.html',
    styleUrls: ['app/components/css/about.css']
})


export class AboutComponent implements OnInit {

    constructor(private dataService: DataService) { }

    brokers: any;

    ngOnInit(): void {

        //Getting all brokers. separate method or not?
        //Properties for calling 'get' says, get all and sort after name
        let properties = {_fields: '', _sort: 'name'};
        //...and get it from here, the brokers REST entity
        let rest = this.dataService.BROKERS_REST_NEW;
        //Promise function call with the variables
        this.dataService.get(rest, properties).then(
            (data) => {
                this.brokers = data;
            }
        );
    }

}