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
var BuyComponent = (function () {
    function BuyComponent(ref) {
        this.ref = ref;
    }
    BuyComponent.prototype.onSearch = function (objects) {
        //#DATA_EXCHANGE
        console.log("BUY", objects);
        this.searchResult = objects;
        //        this.ref.tick();
    };
    BuyComponent.prototype.stringifier = function (ex) {
        return JSON.stringify(ex);
    };
    return BuyComponent;
}());
BuyComponent = __decorate([
    core_1.Component({
        selector: 'buy',
        templateUrl: 'app/components/template/buy.html',
        styleUrls: ['./app/components/css/buy.css']
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], BuyComponent);
exports.BuyComponent = BuyComponent;
//# sourceMappingURL=buy.component.js.map