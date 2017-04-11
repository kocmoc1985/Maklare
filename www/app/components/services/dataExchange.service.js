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
var core_1 = require("@angular/core");
// A shared memory between components
// and between initializations of components
var DataExchange = (function () {
    function DataExchange() {
    }
    DataExchange.prototype.create = function (that) {
        // call from any component using this service with this as argument
        // to get a components specific memory that survives
        // between route changes
        var className = that.constructor.name;
        DataExchange.localMem[className] = DataExchange.localMem[className] || {};
        return DataExchange.localMem[className];
    };
    DataExchange.prototype.global = function () {
        // call from any component using this service
        // to get a global memory shared between all components 
        return DataExchange.globalMem;
    };
    DataExchange.globalMem = {}; // global for everyone
    DataExchange.localMem = {}; // local per class/component
    DataExchange = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataExchange);
    return DataExchange;
}());
exports.DataExchange = DataExchange;
//# sourceMappingURL=dataExchange.service.js.map