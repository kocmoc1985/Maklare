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
var data_service_1 = require('../services/data.service');
var SearchComponent = (function () {
    function SearchComponent(dataService) {
        this.dataService = dataService;
        this.searchCounter = 0;
        this.onSearch = new core_1.EventEmitter(); //#EVENT_EMITTER
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search('');
    };
    SearchComponent.prototype.search = function (term) {
        term = term.trim();
        if (term === this.previousSearchTerm)
            return;
        this.previousSearchTerm = term;
        ++this.searchCounter;
        var properties = {
            $or: [
                { district: { $regex: term, $options: "i" } },
                { town: { $regex: term, $options: "i" } },
                { street: { $regex: term, $options: "i" } },
                { lan: { $regex: term, $options: "i" } }
            ],
            _fields: '',
            _sort: 'name',
            _skip: 0,
            _limit: 100
        };
        this.sendSearchRequest(properties);
    };
    SearchComponent.prototype.sendSearchRequest = function (properties) {
        var _this = this;
        var rest = this.dataService.FASTIGHET_REST_NEW;
        var currentSearchCounter = this.searchCounter;
        //Calling a Promise function
        this.dataService.get(rest, properties).then(function (data) {
            // Ignore all results other than the newest/altered search-term
            if (currentSearchCounter == _this.searchCounter) {
                _this.objects = data;
                _this.onSearch.emit(data); //#EVENT_EMITTER
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "onSearch", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: './app/components/template/search.html',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map