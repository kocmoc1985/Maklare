import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StartpageComponent} from './startpage.component';
import {SellComponent} from './sell.component';
import {BuyComponent} from './buy.component';
import {AboutComponent} from './about.component';


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