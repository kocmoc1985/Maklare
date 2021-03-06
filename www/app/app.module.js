"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap"); // #ngbootstrap
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./components/app.component");
var footer_component_1 = require("./components/main/footer.component");
// Pages
var startpage_component_1 = require("./components/main/startpage.component");
var buy_component_1 = require("./components/main/buy.component");
var sell_component_1 = require("./components/main/sell.component");
var about_component_1 = require("./components/main/about.component");
// Components
var list_app_component_1 = require("./components/main/list-app.component");
var header_component_1 = require("./components/main/header.component");
var search_component_1 = require("./components/main/search.component");
var object_detailed_component_1 = require("./components/main/object-detailed.component");
// Services
var rest_service_1 = require("./components/rest/rest.service");
// Pipes
var datecut_pipe_1 = require("./components/pipes/datecut.pipe");
var kvadratm_pipe_1 = require("./components/pipes/kvadratm.pipe");
var special_a_pipe_1 = require("./components/pipes/special_a.pipe"); //PriceKr
var pricekr_pipe_1 = require("./components/pipes/pricekr.pipe");
// for separate routing file
var app_routing_module_1 = require("./components/app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule,
            app_routing_module_1.AppRoutingModule //#ROUTING
        ],
        declarations: [
            app_component_1.AppComponent,
            list_app_component_1.ListSearchComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            startpage_component_1.StartpageComponent,
            buy_component_1.BuyComponent,
            sell_component_1.SellComponent,
            about_component_1.AboutComponent,
            search_component_1.SearchComponent,
            datecut_pipe_1.DateCutPipe,
            kvadratm_pipe_1.KvadratMeter,
            special_a_pipe_1.SpecialA,
            pricekr_pipe_1.PriceKr,
            object_detailed_component_1.ObjectDetailedComponent //#ROUTING_DETAILED
            // for separate routing file
            // AppRoutingModule
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            rest_service_1.RestService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map