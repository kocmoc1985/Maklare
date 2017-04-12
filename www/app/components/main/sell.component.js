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
var http_1 = require("@angular/http");
var SellComponent = (function () {
    function SellComponent(http) {
        this.http = http;
        this.sent = false;
    }
    //send mail
    SellComponent.prototype.registerMail = function () {
        this.sendContactInfo({ email: this.email });
    };
    //send phonenumber
    SellComponent.prototype.registerPhone = function () {
        this.sendContactInfo({ phoneNumber: this.phoneNumber });
    };
    SellComponent.prototype.sendContactInfo = function (data) {
        this.sent = true;
        var _observable = this.http.post("/register-contact-info", data);
        _observable.subscribe();
        console.log("SHOULD SEND", data, "HA", this.http);
    };
    return SellComponent;
}());
SellComponent = __decorate([
    core_1.Component({
        selector: 'sell',
        templateUrl: 'app/components/template/sell.html',
        styleUrls: ['app/components/css/sell.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], SellComponent);
exports.SellComponent = SellComponent;
//# sourceMappingURL=sell.component.js.map