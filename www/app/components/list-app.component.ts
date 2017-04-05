import {Component, OnInit} from '@angular/core';
import {DataService} from '../components/services/data.service';
import {RestService} from '../components/rest/rest.service';

declare var FASTIGHETS_REST: any;
declare function _find(param: any): any;


@Component({
    selector: 'list-app',
    templateUrl: 'app/components/template/list-search.html',
    styleUrls: ['app/components/css/list-search.css'],
    providers: [DataService]
})


export class ListSearchComponent implements OnInit {
    constructor(private dataService: DataService) {}

    fastigheter: any[];

    ngOnInit(): void {
    }

    getObjects() {
        console.log("getObjects");
        FASTIGHETS_REST.find(_find({_fields: '', _sort: 'name', _skip: 0, _limit: 3}), (data: any, textStatus: any, jqXHR: any) => {
            console.log(data)
            this.fastigheter = data;
        });
    }

    getObjectsB() {

        this.dataService.getFastigheterOld().then(
            (data) => {
                console.log("Data", data);
                this.fastigheter = data;
            }
        );

    }


}


