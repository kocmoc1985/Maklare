import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../services/data.service';
import {DataExchange} from '../services/dataExchange.service';

//#JQUERY + ANGULAR
declare var $: any

declare var MYMODALS: any;

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

    private selectedHoverObject: any;

    showDetailedView(object: any) {
        //#ROUTING_DETAILED
        this.localMem.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
    }

    showModal() {

        MYMODALS.showInfoModal('InfoModal', '', '', 'sm', '');

//        MYMODALS.showInputModalB('InputModal', '', '', 'sm', function (retComponent: any) {
//            console.log("answer recieved:", retComponent);
//        });
//
//        MYMODALS.showConfirmModal('ConfirmModal', 'Continue?', 'sm', 'warning', (modalInput: any) => {
//            console.log("answer recieved:", modalInput);
//        });
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


