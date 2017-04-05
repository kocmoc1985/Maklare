import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'app/components/template/footer.html',
    styles: [`
        h2 {
            font-family: 'Roboto', sans-serif;
        }
        footer {
        	background-color: #d9d9d9;
        }
	`]
})

export class FooterComponent {
}