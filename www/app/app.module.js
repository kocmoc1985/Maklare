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
var platform_browser_1 = require('@angular/platform-browser');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap'); // #ngbootstrap
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var header_component_1 = require('./components/header.component');
var list_app_component_1 = require('./components/list-app.component'); // U13
var startpage_component_1 = require('./components/startpage.component');
var sell_component_1 = require('./components/sell.component');
var buy_component_1 = require('./components/buy.component');
var about_component_1 = require('./components/about.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule
            ],
            declarations: [
                list_app_component_1.ListSearchComponent,
                header_component_1.HeaderComponent,
                startpage_component_1.StartpageComponent,
                buy_component_1.BuyComponent,
                sell_component_1.SellComponent,
                about_component_1.AboutComponent
            ],
            bootstrap: [
                list_app_component_1.ListSearchComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map