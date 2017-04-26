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
    private oldHeight: any;
    private setHeight: '';

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
        this.$el = $(this.el.nativeElement).parent();
        setInterval(()=>{ this.checkHeightResize(); },100);
    }

    checkHeightResize(){
        this.$el.height(''); // remove style attribute that sets a specific height
        let heightNoPadding = this.$el.height();
        let height = this.$el.outerHeight();
        let footerTop = $('footer').offset().top;
        this.$el.height(this.setHeight); // add a set height from "mem" if needed
        let diffPadding = height - heightNoPadding;
        let bottom = this.$el.offset().top + height;
        if(footerTop - bottom >= 1){
            // we need to extend the height
            this.setHeight = height + (footerTop-bottom) - diffPadding;
            this.$el.height(this.setHeight);
        }
        else {
            // we don't need to extend the height
            this.setHeight = '';
        }
        this.oldHeight = height;
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

    showAllObjectsOnMap(selectedHoverObject: boolean, selectedObj: any, event: any) {
        if (!selectedHoverObject) {
            return;
        }

        event.stopPropagation();

        var mapContainer = $("<div id='googleMap' style='width:100%;height:400px'></div>");
        var oneTimeFlag = true;
        var location;
        this.map = null;

        MYMODALS.showInfoModal(selectedObj.street, '', mapContainer, 'md', '', (ret: any) => {

            for (let object of this.objects) {

                if (oneTimeFlag) {
                    oneTimeFlag = false;
                    location = new google.maps.LatLng(selectedObj.mapslat, selectedObj.mapslng);
                    var mapProp = {
                        center: location,
                        zoom: 14,
                    };
                    //
                    this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                }
                
                location = new google.maps.LatLng(object.mapslat, object.mapslng);

                new google.maps.Marker({
                    position: location,
                    map: this.map,
                    title: object.street
                });

            }
        });
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


