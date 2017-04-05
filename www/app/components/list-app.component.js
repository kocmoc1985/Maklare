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
var ListSearchComponent = (function () {
    function ListSearchComponent() {
    }
    ListSearchComponent.prototype.ngOnInit = function () {
        var that = this;
        /*FASTIGHETS_REST.find(_find({_fields: '', _sort: 'name', _skip: 0, _limit: 3}), function (data:any, textStatus:any, jqXHR:any) {
            that.fastigheter = data;
            console.log("fastigheter", that.fastigheter);
        });*/
    };
    ListSearchComponent.prototype.getObjects = function () {
        var _this = this;
        console.log("getObjects");
        FASTIGHETS_REST.find(_find({ _fields: '', _sort: 'name', _skip: 0, _limit: 3 }), function (data, textStatus, jqXHR) {
            console.log(data);
            _this.fastigheter = data;
        });
    };
    ListSearchComponent = __decorate([
        core_1.Component({
            selector: 'list-app',
            templateUrl: 'app/components/template/list-search.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ListSearchComponent);
    return ListSearchComponent;
}());
exports.ListSearchComponent = ListSearchComponent;
//# sourceMappingURL=list-app.component.js.map