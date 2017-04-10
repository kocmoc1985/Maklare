import {Component, EventEmitter, Output, OnInit} from '@angular/core';

import {DataService} from '../services/data.service';

@Component({
    selector: 'search',
    templateUrl: './app/components/template/search.html',
    providers: [DataService]
})

export class SearchComponent implements OnInit {
    private objects: any[];
    private previousSearchTerm: string;
    private searchCounter: number = 0;
    @Output() onSearch = new EventEmitter<any[]>();//#EVENT_EMITTER

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.search('');
    }

    search(term: string): void {
        term = term.trim();
        if (term === this.previousSearchTerm)
            return;

        this.previousSearchTerm = term;
        ++this.searchCounter;

        let properties = {
            $or: [
                {district: {$regex: term, $options: "i"}},
                {town: {$regex: term, $options: "i"}},
                {street: {$regex: term, $options: "i"}},
                {lan: {$regex: term, $options: "i"}}
            ],
            _fields: '',
            _sort: 'name',
            _skip: 0,
            _limit: 100
        };

        this.sendSearchRequest(properties);
    }

    private sendSearchRequest(properties: Object) {
        let rest = this.dataService.FASTIGHET_REST_NEW;
        let currentSearchCounter = this.searchCounter;

        //Calling a Promise function
        this.dataService.get(rest, properties).then(
            (data) => {
                // Ignore all results other than the newest/altered search-term
                if (currentSearchCounter == this.searchCounter) {
                    this.objects = data;
                    this.onSearch.emit(data);//#EVENT_EMITTER
                }
            }
        );
    }
}
