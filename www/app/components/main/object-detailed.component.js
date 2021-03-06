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
var common_1 = require("@angular/common");
var data_service_1 = require("../services/data.service");
require("rxjs/add/operator/switchMap");
var ObjectDetailedComponent = (function () {
    function ObjectDetailedComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.loadedImages = {};
        this.readMoreText = "Läs mer om mig";
    }
    ObjectDetailedComponent.prototype.showVisningar = function () {
        if (!this.oneTimeFlag) {
            TABLE_VISNING.show(true);
            this.oneTimeFlag = true;
        }
    };
    ObjectDetailedComponent.prototype.toggleReadMore = function () {
        if (this.readMore) {
            this.readMore = false;
            this.readMoreText = "Läs mer om mig";
        }
        else {
            this.readMore = true;
            this.readMoreText = "Visa mig";
        }
    };
    ObjectDetailedComponent.prototype.showGoogleMap = function () {
        //#GOOGLE_MAP
        if (this.map) {
            return;
        }
        var location = new google.maps.LatLng(this.object.mapslat, this.object.mapslng);
        var mapProp = {
            scrollwheel: false,
            center: location,
            zoom: 10,
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: this.object.street
        });
    };
    ObjectDetailedComponent.prototype.bgImg = function (object) {
        return "url('images/estate/" + object.objectnr + "/main.jpg')";
    };
    ObjectDetailedComponent.prototype.registerLoadedImage = function (img) {
        var _this = this;
        setTimeout(function () {
            _this.loadedImages[img] = true;
        }, 0);
    };
    ObjectDetailedComponent.prototype.goBack = function () {
        this.location.back();
    };
    ObjectDetailedComponent.prototype.set = function (data) {
        this.object = data[0];
        this.broker = data[0].broker;
        this.objectImages = data[0].images;
        createTableVisning(this.object.objectnr);
    };
    ObjectDetailedComponent.prototype.ngAfterViewInit = function () {
    };
    ObjectDetailedComponent.prototype.ngOnInit = function () {
        var _this = this;
        //#ROUTING_DETAILED
        this.route.params
            .switchMap(function (params) { return _this.dataService.getFastighetById(params['id']); })
            .subscribe(function (data) { return (_this.set(data)); }); //(console.log("data",data))
    };
    return ObjectDetailedComponent;
}());
ObjectDetailedComponent = __decorate([
    core_1.Component({
        //#ROUTING_DETAILED
        selector: 'object-detailed',
        templateUrl: 'app/components/template/object-detailed.html',
        styleUrls: ['app/components/css/object-detailed.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService,
        router_1.ActivatedRoute,
        common_1.Location])
], ObjectDetailedComponent);
exports.ObjectDetailedComponent = ObjectDetailedComponent;
//# sourceMappingURL=object-detailed.component.js.map