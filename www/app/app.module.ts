import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // #ngbootstrap
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';



import {AppComponent} from './components/app.component';
import {FooterComponent} from './components/footer.component';

// Pages
import {StartpageComponent} from './components/startpage.component';
import {BuyComponent} from './components/buy.component';
import {SellComponent} from './components/sell.component';
import {AboutComponent} from './components/about.component';

// Components
import {ListSearchComponent} from './components/list-app.component';
import {HeaderComponent} from './components/header.component';
import {SearchComponent} from './components/search.component';

// Services
import {RestService} from './components/rest/rest.service';

// for separate routing file
// import { AppRoutingModule } from './components/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule,
        RouterModule.forRoot([
            {path: '', component: StartpageComponent},
            {path: 'buy', component: BuyComponent},
            {path: 'sell', component: SellComponent},
            {path: 'about', component: AboutComponent}
        ])
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
        SearchComponent
        // for separate routing file
        // AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ],
    
    providers:[
        RestService
    ]
})
export class AppModule {}

