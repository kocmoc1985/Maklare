import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StartpageComponent} from './main/startpage.component';
import {SellComponent} from './main/sell.component';
import {BuyComponent} from './main/buy.component';
import {AboutComponent} from './main/about.component';
import {ObjectDetailedComponent} from './main/object-detailed.component';

//#ROUTING
const routes: Routes = [
    {path: '', component: StartpageComponent},
    {path: 'buy', component: BuyComponent},
    {path: 'sell', component: SellComponent},
    {path: 'about', component: AboutComponent},
    {path: 'detail/:id', component: ObjectDetailedComponent} //#ROUTING_DETAILED
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}