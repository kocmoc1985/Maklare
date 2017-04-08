import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {DataService} from '../services/data.service';

import 'rxjs/add/operator/switchMap';

@Component({
    //#ROUTING_DETAILED
    selector: 'object-detailed',
    templateUrl: 'app/components/template/object-detailed.html',
    styleUrls: ['app/components/css/object-detailed.css']
})


export class ObjectDetailedComponent implements OnInit {

    private object: any;
    private objectImages: String[];
    private broker: any;
    private urlExist: boolean;

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    urlExists(url: any) {
        console.log("function called");
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        //        return http.status != 404;
        if (http.status != 404) {
            this.urlExist = true;
        } else {
            this.urlExist = false;
        }
    }

    goBack(): void {
        this.location.back();
    }

    set(data: any) {
        this.object = data[0];
        this.broker = data[0].broker;
        this.objectImages = data[0].images;
//        console.log("object", this.object);
        //        console.log("Imgages:", this.objectImages);
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.dataService.getFastighetById(params['id']))
            .subscribe(data => (this.set(data))); //(console.log("data",data))
    }

}