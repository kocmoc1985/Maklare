import {Injectable} from '@angular/core';
import {RestEntity} from '../rest/rest.class';
import {RestService} from '../rest/rest.service';

//This one for use with "OLD" REST
declare var FASTIGHETS_REST: any;
declare var BROKERS_REST: any;

declare function _find(param: any): any;

@Injectable()
export class DataService {
    public FASTIGHET_REST_NEW: RestEntity;
    public BROKERS_REST_NEW: RestEntity;

    constructor(private restService: RestService) {
        this.FASTIGHET_REST_NEW = this.restService.newRestEntity("fastighet");
        this.BROKERS_REST_NEW = this.restService.newRestEntity("brokers");
    }
    
    /**
     * USE THIS!
     * Find usage example in "list-app.components" -> getFastigheter(...) && getBrokers(...)
     */
    get(rest: RestEntity, properties: any): Promise<any[]> {
        return new Promise(
            (resolve, reject) => {
                rest.find(this._find(properties)).then((data: any) => {
                    resolve(data);
                });
            }
        );
    }
  

    /**
     * This one uses "OLD" REST not basing on Angular
     * @deprecated
     */
    getFastigheterOld(): Promise<any[]> {
        return new Promise(
            (resolve, reject) => {
                FASTIGHETS_REST.find(this._find({_fields: '', _sort: 'name', _skip: 0, _limit: 3}), (data: any, textStatus: any, jqXHR: any) => {
                    resolve(data);
                });
            }
        );
    }

    getBrokers() {

        return new Promise(
            (resolve, reject) => {

                BROKERS_REST.find(_find({_fields: '', _sort: 'name', _skip: 0, _limit: 3}), (data: any, textStatus: any, jqXHR: any) => {
                    resolve(data);
                });
            }
        );
    }
    
    _find(obj: any) {
      return "find/" + JSON.stringify(obj);
}


}
