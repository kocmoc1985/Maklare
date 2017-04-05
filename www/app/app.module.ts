import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import {HeaderComponent} from './components/header.component';
import {ListSearchComponent} from './components/list-app.component'; // U13

import {AppComponent} from './components/app.component';
import {StartpageComponent} from './components/startpage.component';
import {SellComponent} from './components/sell.component';
import {BuyComponent} from './components/buy.component';
import {AboutComponent} from './components/about.component';

// for separate routing file
// import { AppRoutingModule } from './components/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: StartpageComponent },
            { path: 'buy', component: BuyComponent },
            { path: 'sell',  component: SellComponent },
            { path: 'about', component: AboutComponent } 
        ])
    ],
    declarations: [
        AppComponent,
        ListSearchComponent,
        HeaderComponent,
        StartpageComponent,
        BuyComponent,
        SellComponent,
        AboutComponent
        // for separate routing file
        // AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}

