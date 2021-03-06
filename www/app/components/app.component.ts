import { Component } from '@angular/core';

import { DataService } from './services/data.service';


@Component({
    selector: 'my-app',
    //#ROUTING
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet> 
        <app-footer></app-footer>
    `,
    providers: [DataService]
})

export class AppComponent {

}
