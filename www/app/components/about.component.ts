import { Component, OnInit } from '@angular/core';

import {DataService} from '../components/services/data.service';

@Component({
    selector: 'about',
    templateUrl: 'app/components/template/about.html'
})

export class AboutComponent implements OnInit {
    constructor(private DataService: DataService) { }

    brokers: any;

    ngOnInit(): void {
        this.DataService.getBrokers().then(
            (data) => {
                console.log("Data", data);
                this.brokers = data;
            }
        );
    }
}