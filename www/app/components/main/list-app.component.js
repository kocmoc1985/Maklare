"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("../services/data.service");
var dataExchange_service_1 = require("../services/dataExchange.service");
//declare var MYMODALS: any;
//declare function _find(param: any): any;
var ListSearchComponent = (function () {
    function ListSearchComponent(el, //#JQUERY + ANGULAR
        dataService, dataExchange, router) {
        this.el = el;
        this.dataService = dataService;
        this.dataExchange = dataExchange;
        this.router = router;
        this.localMem = this.dataExchange.create(this);
        this.globalMem = this.dataExchange.global();
    }
    ListSearchComponent.prototype.ngOnInit = function () {
        //#JQUERY + ANGULAR
        var $el = $(this.el.nativeElement);
        //        $el.css('display', 'block');
    };
    ListSearchComponent.prototype.showDetailedView = function (object) {
        //#ROUTING_DETAILED
        this.localMem.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
    };
    ListSearchComponent.prototype.showModal = function () {
        MYMODALS.showInfoModal('InfoModal', '', '', 'sm', '');
        //        MYMODALS.showInputModalB('InputModal', '', '', 'sm', function (retComponent: any) {
        //            console.log("answer recieved:", retComponent);
        //        });
        //
        //        MYMODALS.showConfirmModal('ConfirmModal', 'Continue?', 'sm', 'warning', (modalInput: any) => {
        //            console.log("answer recieved:", modalInput);
        //        });
    };
    ListSearchComponent.prototype.over = function (object) {
        this.selectedHoverObject = object;
    };
    ListSearchComponent.prototype.leave = function () {
        this.selectedHoverObject = null;
    };
    ListSearchComponent.prototype.equals = function (selectedObj, obj) {
        if (!selectedObj || !obj) {
            return false;
        }
        if (selectedObj._id && obj._id) {
            if (selectedObj._id == obj._id) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @deprecated
     */
    ListSearchComponent.prototype.getBrokers = function () {
        var _this = this;
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {name:"John Doe"}
        var properties = { _fields: '', _sort: 'name', _skip: 0, _limit: 3 };
        var rest = this.dataService.BROKERS_REST_NEW;
        //Calling a Promise function
        //#PROMISE
        this.dataService.get(rest, properties).then(function (data) {
            _this.objects = data;
        });
    };
    return ListSearchComponent;
}());
__decorate([
    core_1.Input('estates'),
    __metadata("design:type", Array)
], ListSearchComponent.prototype, "objects", void 0);
ListSearchComponent = __decorate([
    core_1.Component({
        selector: 'list-app',
        templateUrl: 'app/components/template/list-search.html',
        styleUrls: ['app/components/css/list-search.css'],
        providers: [data_service_1.DataService, dataExchange_service_1.DataExchange]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        data_service_1.DataService,
        dataExchange_service_1.DataExchange,
        router_1.Router])
], ListSearchComponent);
exports.ListSearchComponent = ListSearchComponent;
//# sourceMappingURL=list-app.component.js.map