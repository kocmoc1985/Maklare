import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header.component';
import {StartpageComponent} from './components/startpage.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        StartpageComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}