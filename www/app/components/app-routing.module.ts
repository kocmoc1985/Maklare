import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StartpageComponent} from './startpage.component';
import {SellComponent} from './sell.component';
import {BuyComponent} from './buy.component';
import {AboutComponent} from './about.component';
import {ObjectDetailedComponent} from './object-detailed.component';

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