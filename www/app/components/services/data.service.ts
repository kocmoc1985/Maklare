import {Injectable} from '@angular/core';

declare var FASTIGHETS_REST: any;
declare function _find(param: any): any;

@Injectable()
export class DataService {
    arr: Promise<any[]>;

    getFastigheter(): Promise<any[]> {

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