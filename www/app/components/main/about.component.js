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
var data_service_1 = require("../services/data.service");
var AboutComponent = (function () {
    function AboutComponent(dataService) {
        this.dataService = dataService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Getting all brokers. separate method or not?
        //Properties for calling 'get' says, get all and sort after name
        var properties = { _fields: '', _sort: 'name' };
        //...and get it from here, the brokers REST entity
        var rest = this.dataService.BROKERS_REST_NEW;
        //Promise function call with the variables
        this.dataService.get(rest, properties).then(function (data) {
            _this.brokers = data;
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: 'app/components/template/about.html',
        styleUrls: ['app/components/css/about.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map