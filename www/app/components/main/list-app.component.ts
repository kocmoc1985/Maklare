import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../services/data.service';
import {DataExchange} from '../services/dataExchange.service';

//#JQUERY + ANGULAR
declare var $: any
declare var MYMODALS: any;
declare var google: any;

//declare function _find(param: any): any;

@Component({
    selector: 'list-app',
    templateUrl: 'app/components/template/list-search.html',
    styleUrls: ['app/components/css/list-search.css'],
    providers: [DataService, DataExchange]
})

export class ListSearchComponent implements OnInit {
    //#DATA_EXCHANGE
    @Input('estates') objects: any[];

    private localMem: any;
    private globalMem: any;
    private map: any;

    constructor(
        private el: ElementRef, //#JQUERY + ANGULAR
        private dataService: DataService,
        private dataExchange: DataExchange,
        private router: Router
    ) {
        this.localMem = this.dataExchange.create(this);
        this.globalMem = this.dataExchange.global();
    }

    ngOnInit() {
        //#JQUERY + ANGULAR
        let $el = $(this.el.nativeElement);
        //        $el.css('display', 'block');
    }

    dropDownSortValueChanged(event: any) {
        this.globalMem.search(this.globalMem.previousSearchTerm, event.target.value);
    }

    private selectedHoverObject: any;

    showDetailedView(object: any) {
        //#ROUTING_DETAILED
        this.localMem.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
    }


    showGoogleMapInModal(object: any, event: any) {
        //#GOOGLE_MAP

        event.stopPropagation();

        var mapContainer = $("<div id='googleMap' style='width:100%;height:400px'></div>");
        MYMODALS.showInfoModal(object.street + ', ' + object.town, '', mapContainer, 'md', '', (ret: any) => {
            var location = new google.maps.LatLng(object.mapslat, object.mapslng);

            var mapProp = {
                center: location,
                zoom: 10,

            };
            this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: object.street
            });

            google.maps.event.addListenerOnce(this.map, 'idle', () => {
                //Map loaded
            });
        });

    }

    over(object: any) {
        this.selectedHoverObject = object;
    }

    leave() {
        this.selectedHoverObject = null;
    }

    equals(selectedObj: any, obj: any) {
        if (!selectedObj || !obj) {
            return false;
        }

        if (selectedObj._id && obj._id) {
            if (selectedObj._id == obj._id) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * @deprecated
     */
    getBrokers() {
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {name:"John Doe"}
        let properties = {_fields: '', _sort: 'name', _skip: 0, _limit: 3};
        let rest = this.dataService.BROKERS_REST_NEW;

        //Calling a Promise function
        //#PROMISE
        this.dataService.get(rest, properties).then(
            (data) => {
                this.objects = data;
            }
        );
    }

}


