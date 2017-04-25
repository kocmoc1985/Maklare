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
var dataExchange_service_1 = require("../services/dataExchange.service");
var Filters = (function () {
    function Filters() {
        this.types = [];
    }
    return Filters;
}());
var SearchComponent = SearchComponent_1 = (function () {
    function SearchComponent(dataService, dataExchange) {
        var _this = this;
        this.dataService = dataService;
        this.dataExchange = dataExchange;
        this.searchCounter = 0;
        this.onSearch = new core_1.EventEmitter();
        this.globalMem = this.dataExchange.global();
        this.globalMem.search = function (term, sort) {
            _this.search(term, sort, 0);
        };
        this.initFilterData();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search('', '-dateAdded', 0);
    };
    SearchComponent.prototype.search = function (term, sort, delayMs) {
        if (delayMs === void 0) { delayMs = undefined; }
        term = term.trim();
        this.previousSearchTerm = term;
        this.previousSearchSort = sort;
        this.globalMem.previousSearchTerm = term;
        var properties = {
            $or: [
                { district: { $regex: term, $options: "i" } },
                { town: { $regex: term, $options: "i" } },
                { street: { $regex: term, $options: "i" } },
                { lan: { $regex: term, $options: "i" } }
            ],
            _fields: '',
            _sort: sort,
            _skip: 0,
            _limit: 100
        };
        this.insertFiltersIntoQuery(properties);
        this.sendSearchRequest(properties, delayMs);
    };
    SearchComponent.prototype.insertFiltersIntoQuery = function (properties) {
        for (var name_1 in SearchComponent_1.filters) {
            var value = SearchComponent_1.filters[name_1];
            if (name_1 === 'types') {
                if (value.length) {
                    properties['type'] = value;
                }
                continue;
            }
            var lowerCaseName = name_1.substr(3).toLowerCase();
            if (value) {
                var obj = properties[lowerCaseName] || {};
                name_1.indexOf('min') === 0
                    ? obj['$gte'] = value
                    : obj['$lte'] = value;
                properties[lowerCaseName] = obj;
            }
            else if (properties[lowerCaseName]) {
                delete properties[lowerCaseName];
            }
        }
    };
    SearchComponent.prototype.toggleTypeFilter = function (name) {
        var index = SearchComponent_1.filters.types.indexOf(name);
        if (index === -1) {
            SearchComponent_1.filters.types.push(name);
        }
        else {
            SearchComponent_1.filters.types.splice(index, 1);
        }
        this.search(this.previousSearchTerm, this.previousSearchSort, 0);
    };
    SearchComponent.prototype.setFilter = function (name, value) {
        SearchComponent_1.filters[name] = value;
        if (!value) {
            delete SearchComponent_1.filters[name];
        }
        this.search(this.previousSearchTerm, this.previousSearchSort, 0);
    };
    SearchComponent.prototype.sendSearchRequest = function (properties, delayMs) {
        var _this = this;
        var keyUpDelayMs = 300 || delayMs;
        var rest = this.dataService.FASTIGHET_REST_NEW;
        var currentSearchCounter = ++this.searchCounter;
        // Wait to notice if the search-term gets altered before sending additional requests
        clearTimeout(this.timeoutKeyUp);
        this.timeoutKeyUp = setTimeout(function () {
            _this.dataService.get(rest, properties).then(function (data) {
                // Ignore all results other than the newest/altered search-term
                if (currentSearchCounter == _this.searchCounter) {
                    _this.objects = data;
                    _this.onSearch.emit(data);
                }
            });
        }, keyUpDelayMs);
    };
    SearchComponent.prototype.initFilterData = function () {
        this.prices = [
            500000,
            750000,
            1000000,
            1500000,
            2000000,
            3000000,
            4000000,
            5000000,
            10000000
        ];
        this.rooms = [
            1,
            1.5,
            2,
            2.5,
            3,
            4,
            5
        ];
        this.areas = [
            20,
            30,
            40,
            50,
            75,
            100
        ];
    };
    return SearchComponent;
}());
SearchComponent.filters = new Filters();
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "onSearch", void 0);
SearchComponent = SearchComponent_1 = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './app/components/template/search.html',
        styleUrls: ['./app/components/css/search.css'],
        providers: [data_service_1.DataService, dataExchange_service_1.DataExchange]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService,
        dataExchange_service_1.DataExchange])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var SearchComponent_1;
//# sourceMappingURL=search.component.js.map