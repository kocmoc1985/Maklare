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
var data_service_1 = require('../components/services/data.service');
//declare var FASTIGHETS_REST: any;
//declare function _find(param: any): any;
var ListSearchComponent = (function () {
    function ListSearchComponent(dataService) {
        this.dataService = dataService;
    }
    ListSearchComponent.prototype.ngOnInit = function () { };
    ListSearchComponent.prototype.getFastigheter = function () {
        var _this = this;
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {area:25}
        var properties = { _fields: '', _sort: 'name', _skip: 0, _limit: 3 };
        var rest = this.dataService.FASTIGHET_REST_NEW;
        //Calling a Promise function
        this.dataService.get(rest, properties).then(function (data) {
            _this.objects = data;
        });
    };
    ListSearchComponent.prototype.getBrokers = function () {
        var _this = this;
        // Properties examples:
        // {_fields: '', _sort: 'name', _skip: 0, _limit: 3}
        // {name:"John Doe"}
        var properties = { _fields: '', _sort: 'name', _skip: 0, _limit: 3 };
        var rest = this.dataService.BROKERS_REST_NEW;
        //Calling a Promise function
        this.dataService.get(rest, properties).then(function (data) {
            _this.objects = data;
            //                this.images = this.objects.images; // How to get images?
        });
    };
    ListSearchComponent = __decorate([
        core_1.Component({
            selector: 'list-app',
            templateUrl: 'app/components/template/list-search.html',
            styleUrls: ['app/components/css/list-search.css'],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ListSearchComponent);
    return ListSearchComponent;
}());
exports.ListSearchComponent = ListSearchComponent;
//# sourceMappingURL=list-app.component.js.map