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
var SearchComponent = (function () {
    function SearchComponent(dataService, dataExchange) {
        var _this = this;
        this.dataService = dataService;
        this.dataExchange = dataExchange;
        this.searchCounter = 0;
        this.onSearch = new core_1.EventEmitter();
        this.globalMem = this.dataExchange.global();
        this.globalMem.search = function (term, sort) {
            _this.search(term, sort);
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search('', '-dateAdded');
    };
    SearchComponent.prototype.search = function (term, sort) {
        term = term.trim();
        this.previousSearchTerm = term;
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
        this.sendSearchRequest(properties);
    };
    SearchComponent.prototype.sendSearchRequest = function (properties) {
        var _this = this;
        var keyUpDelayMs = 300;
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
    return SearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "onSearch", void 0);
SearchComponent = __decorate([
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
//# sourceMappingURL=search.component.js.map