import {Component, EventEmitter, Output, OnInit} from '@angular/core';

import {DataService} from '../services/data.service';
import {DataExchange} from '../services/dataExchange.service';

@Component({
    selector: 'search',
    templateUrl: './app/components/template/search.html',
    styleUrls: ['./app/components/css/search.css'],
    providers: [DataService, DataExchange]
})

export class SearchComponent implements OnInit {
    private objects: any[];
    private previousSearchTerm: string;
    private searchCounter: number = 0;
    private timeoutKeyUp: any;
    private globalMem: any;
    @Output() onSearch = new EventEmitter<any[]>();

    constructor(
        private dataService: DataService,
        private dataExchange: DataExchange
    ) {

        this.globalMem = this.dataExchange.global();

        this.globalMem.search = (term: string, sort: string) => {
            this.search(term, sort);
        }
        
    }


    ngOnInit() {
        this.search('', '-dateAdded');
    }

    search(term: string, sort: string): void {
        term = term.trim();
        this.previousSearchTerm = term;
        this.globalMem.previousSearchTerm = term;

        let properties = {
            $or: [
                {district: {$regex: term, $options: "i"}},
                {town: {$regex: term, $options: "i"}},
                {street: {$regex: term, $options: "i"}},
                {lan: {$regex: term, $options: "i"}}
            ],
            _fields: '',
            _sort: sort,
            _skip: 0,
            _limit: 100
        };

        this.sendSearchRequest(properties);
    }

    private sendSearchRequest(properties: Object) {
        const keyUpDelayMs = 300;
        let rest = this.dataService.FASTIGHET_REST_NEW;
        let currentSearchCounter = ++this.searchCounter;

        // Wait to notice if the search-term gets altered before sending additional requests
        clearTimeout(this.timeoutKeyUp);

        this.timeoutKeyUp = setTimeout(() => {
            this.dataService.get(rest, properties).then(
                (data: any[]) => {
                    // Ignore all results other than the newest/altered search-term
                    if (currentSearchCounter == this.searchCounter) {
                        this.objects = data;
                        this.onSearch.emit(data);
                    }
                }
            );
        }, keyUpDelayMs);
    }
}
