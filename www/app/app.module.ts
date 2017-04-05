import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app.component';
import {AppBComponent} from './components/app-b.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AppBComponent
    ],
    bootstrap: [
        AppComponent,
        AppBComponent
    ]
})
export class AppModule {}