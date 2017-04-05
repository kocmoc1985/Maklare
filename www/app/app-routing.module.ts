import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StartpageComponent} from './components/startpage.component';
import {SellComponent} from './components/sell.component';
import {BuyComponent} from './components/buy.component';
import {AboutComponent} from './components/about.component';


const routes: Routes = [
    { path: '', component: StartpageComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'sell',  component: SellComponent },
    { path: 'about', component: AboutComponent } 
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}