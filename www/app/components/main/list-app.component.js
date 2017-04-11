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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require('../services/data.service');
var dataExchange_service_1 = require('../services/dataExchange.service');
//declare var FASTIGHETS_REST: any;
//declare function _find(param: any): any;
var ListSearchComponent = (function () {
    function ListSearchComponent(dataService, dataExchange, router) {
        this.dataService = dataService;
        this.dataExchange = dataExchange;
        this.router = router;
        this.localMem = this.dataExchange.create(this);
    }
    ListSearchComponent.prototype.showDetailedView = function (object) {
        //#ROUTING_DETAILED
        this.localMem.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
    };
    ListSearchComponent.prototype.over = function (object) {
        this.selectedHoverObject = object;
    };
    ListSearchComponent.prototype.leave = function () {
        this.selectedHoverObject = null;
    };
    ListSearchComponent.prototype.formatDate = function (date) {
        return date.substring(0, 10);
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
    __decorate([
        core_1.Input('estates'), 
        __metadata('design:type', Array)
    ], ListSearchComponent.prototype, "objects", void 0);
    ListSearchComponent = __decorate([
        core_1.Component({
            selector: 'list-app',
            templateUrl: 'app/components/template/list-search.html',
            styleUrls: ['app/components/css/list-search.css'],
            providers: [data_service_1.DataService, dataExchange_service_1.DataExchange]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, dataExchange_service_1.DataExchange, router_1.Router])
    ], ListSearchComponent);
    return ListSearchComponent;
}());
exports.ListSearchComponent = ListSearchComponent;
//# sourceMappingURL=list-app.component.js.map