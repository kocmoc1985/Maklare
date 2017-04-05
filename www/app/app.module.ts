import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app.component'; // test
import {AppBComponent} from './components/app-b.component'; // test
import {ListSearchComponent} from './components/list-app.component'; // U13

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
    ],
    bootstrap: [
        AppComponent,
        AppBComponent,
        ListSearchComponent
    ]
})
export class AppModule {}