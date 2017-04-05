import {Component, OnInit} from '@angular/core';

declare var FASTIGHETS_REST: any;
declare function _find(param: any): any;


@Component({
    selector: 'list-app',
    templateUrl: 'app/components/template/list-search.html'
})


export class ListSearchComponent implements OnInit {
   
    fastigheter: any[];

    ngOnInit(): void {
        var that = this;
        /*FASTIGHETS_REST.find(_find({_fields: '', _sort: 'name', _skip: 0, _limit: 3}), function (data:any, textStatus:any, jqXHR:any) {
            that.fastigheter = data;
            console.log("fastigheter", that.fastigheter);
        });*/
    }
    
    getObjects(){
        console.log("getObjects");
        FASTIGHETS_REST.find(_find({_fields: '', _sort: 'name', _skip: 0, _limit: 3}), (data:any, textStatus:any, jqXHR:any) => {
            console.log(data)
            this.fastigheter = data;
        });
        
    }

   
}


