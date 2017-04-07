import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {DataService} from '../components/services/data.service';

import 'rxjs/add/operator/switchMap';

@Component({
    //#ROUTING_DETAILED
    selector: 'object-detailed',
    templateUrl: 'app/components/template/object-detailed.html'
    //    styleUrls: ['app/components/css/object-detailed.component.css'],
})


export class ObjectDetailedComponent implements OnInit {
    object: any;

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.dataService.getFastighetById(params['id']))
            .subscribe(data => this.object = data[0]); //(console.log("data",data))
    }

}