import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'app/components/template/header.html',
    styleUrls: ['app/components/css/header.css']
})

    
export class HeaderComponent {
    constructor(){}

    ngAfterViewInit(){
        
        $(document).on('click', '.header a', function(){
            $('.header a').removeClass('selected');
            $(this).addClass('selected');
        })
    }
}
