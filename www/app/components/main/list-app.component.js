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
    ListSearchComponent.prototype.dropDownSortValueChanged = function (event) {
        this.globalMem.search(this.globalMem.previousSearchTerm, event.target.value);
    };
    ListSearchComponent.prototype.showDetailedView = function (object) {
        //#ROUTING_DETAILED
        this.localMem.selectedObject = object;
        this.router.navigate(['/detail', object._id]);
    };
    ListSearchComponent.prototype.showAllObjectsOnMap = function (selectedHoverObject, selectedObj, event) {
        var _this = this;
        if (!selectedHoverObject) {
            return;
        }
        event.stopPropagation();
        var mapContainer = $("<div id='googleMap' style='width:100%;height:400px'></div>");
        var oneTimeFlag = true;
        var location;
        this.map = null;
        MYMODALS.showInfoModal(selectedObj.street, '', mapContainer, 'md', '', function (ret) {
            for (var _i = 0, _a = _this.objects; _i < _a.length; _i++) {
                var object = _a[_i];
                if (oneTimeFlag) {
                    oneTimeFlag = false;
                    location = new google.maps.LatLng(selectedObj.mapslat, selectedObj.mapslng);
                    var mapProp = {
                        center: location,
                        zoom: 14,
                    };
                    //
                    _this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                }
                location = new google.maps.LatLng(object.mapslat, object.mapslng);
                new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    title: object.street
                });
            }
        });
    };
    ListSearchComponent.prototype.showGoogleMapInModal = function (object, event) {
        //#GOOGLE_MAP
        var _this = this;
        event.stopPropagation();
        var mapContainer = $("<div id='googleMap' style='width:100%;height:400px'></div>");
        MYMODALS.showInfoModal(object.street + ', ' + object.town, '', mapContainer, 'md', '', function (ret) {
            var location = new google.maps.LatLng(object.mapslat, object.mapslng);
            var mapProp = {
                center: location,
                zoom: 10,
            };
            _this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            var marker = new google.maps.Marker({
                position: location,
                map: _this.map,
                title: object.street
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                //Map loaded
            });
        });
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