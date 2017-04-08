import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import {AppComponent} from './components/app.component';
import {FooterComponent} from './components/main/footer.component';

// Pages
import {StartpageComponent} from './components/main/startpage.component';
import {BuyComponent} from './components/main/buy.component';
import {SellComponent} from './components/main/sell.component';
import {AboutComponent} from './components/main/about.component';

// Components
import {ListSearchComponent} from './components/main/list-app.component';
import {HeaderComponent} from './components/main/header.component';
import {SearchComponent} from './components/main/search.component';
import {ObjectDetailedComponent} from './components/main/object-detailed.component';

// Services
import {RestService} from './components/rest/rest.service';

// for separate routing file
import {AppRoutingModule} from './components/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule,
        AppRoutingModule //#ROUTING
    ],
    declarations: [
        AppComponent,
        ListSearchComponent,
        HeaderComponent,
        FooterComponent,
        StartpageComponent,
        BuyComponent,
        SellComponent,
        AboutComponent,
        SearchComponent,
        ObjectDetailedComponent //#ROUTING_DETAILED
        // for separate routing file
        // AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ],

    providers: [
        RestService
    ]
})
export class AppModule {}

