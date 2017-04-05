import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'app/components/template/header.html',
    styles: [`
        h1 {
            font-family: 'Pinyon Script', cursive;
        },
        h2 {
            font-family: 'Roboto', sans-serif;
        }
        `]
})

export class HeaderComponent {
}