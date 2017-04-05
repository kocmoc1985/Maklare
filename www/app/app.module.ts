import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import {HeaderComponent} from './components/header.component';
import {ListSearchComponent} from './components/list-app.component'; // U13

import {StartpageComponent} from './components/startpage.component';
import {SellComponent} from './components/sell.component';
import {BuyComponent} from './components/buy.component';
import {AboutComponent} from './components/about.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        RouterModule
    ],
    declarations: [
        ListSearchComponent,
        HeaderComponent,
        StartpageComponent,
        BuyComponent,
        SellComponent,
        AboutComponent
    ],
    bootstrap: [
        ListSearchComponent
    ]
})
export class AppModule {}

