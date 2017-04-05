import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';
import { RouterModule }   from '@angular/router';

import {AppComponent} from './components/app.component'; // test
import {AppBComponent} from './components/app-b.component'; // test
import {ListSearchComponent} from './components/list-app.component'; // U13
import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header.component';

import {StartpageComponent} from './components/startpage.component';
import {SellComponent} from './components/sell.component';
import {BuyComponent} from './components/buy.component';
import {AboutComponent} from './components/about.component';

import { AppRoutingModule } from './components/app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AppBComponent,
        ListSearchComponent
        HeaderComponent,
        StartpageComponent,
        BuyComponent,
        SellComponent,
        AboutComponent,
        AppRoutingModule
    ],
})
export class AppModule {}
    bootstrap: [
        AppComponent,
        AppBComponent,
        ListSearchComponent
    ]
