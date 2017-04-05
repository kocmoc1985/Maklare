    import { Component } from '@angular/core';

    @Component({
      selector: 'my-app',
      template: `
        <app-header></app-header>
        <app-startpage></app-startpage>
        <h1>{{title}}</h1>
        `
    })

    export class AppComponent {
    }
