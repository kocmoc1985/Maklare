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
var rest_service_1 = require('../rest/rest.service');
var DataService = (function () {
    function DataService(restService) {
        this.restService = restService;
    }
    DataService.prototype.ngOnInit = function () {
        this.FASTIGHET_REST_NEW = this.restService.newRestEntity("fastighet");
        this.BROKERS_REST_NEW = this.restService.newRestEntity("brokers");
    };
    DataService.prototype.getFastigheterOld = function () {
        return new Promise(function (resolve, reject) {
            FASTIGHETS_REST.find(_find({ _fields: '', _sort: 'name', _skip: 0, _limit: 3 }), function (data, textStatus, jqXHR) {
                resolve(data);
            });
        });
    };
    DataService.prototype.getBrokers = function () {
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rest_service_1.RestService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map