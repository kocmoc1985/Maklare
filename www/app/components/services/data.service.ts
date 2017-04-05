import {Component, Injectable, OnInit} from '@angular/core';
import {RestEntity} from '../rest/rest.class';
import {RestService} from '../rest/rest.service';


declare var FASTIGHETS_REST: any;
declare function _find(param: any): any;



@Injectable()
export class DataService implements OnInit {
    FASTIGHET_REST_NEW: RestEntity;
    BROKERS_REST_NEW: RestEntity;

    constructor(private restService: RestService) {}

    ngOnInit(): void {
        this.FASTIGHET_REST_NEW = this.restService.newRestEntity("fastighet");
        this.BROKERS_REST_NEW = this.restService.newRestEntity("brokers");
    }


    getFastigheterOld(): Promise<any[]> {

        return new Promise(
            (resolve, reject) => {

                FASTIGHETS_REST.find(_find({_fields: '', _sort: 'name', _skip: 0, _limit: 3}), (data: any, textStatus: any, jqXHR: any) => {
                    resolve(data);
                });

            }
        );

    }

    getBrokers() {

    }

}