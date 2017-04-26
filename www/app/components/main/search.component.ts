import {Component, EventEmitter, Output, OnInit, OnDestroy} from '@angular/core';

import {DataService} from '../services/data.service';
import {DataExchange} from '../services/dataExchange.service';

//declare function setTimeout(f:any,c:any): any;

class Filters {
    minPrice: number;
    maxPrice: number;
    minRooms: number;
    maxRooms: number;
    minArea: number;
    maxArea: number;
    types: string[] = [];
}

@Component({
    selector: 'search',
    templateUrl: './app/components/template/search.html',
    styleUrls: ['./app/components/css/search.css'],
    providers: [DataService, DataExchange]
})

export class SearchComponent implements OnInit, OnDestroy {
    private objects: any[];
    private localSearchTerm: string;
    private static previousSearchTerm: string;
    private static previousSearchSort: string;
    private searchCounter: number = 0;
    private timeoutKeyUp: any;
    private globalMem: any;
    private prices: number[];
    private rooms: number[];
    private areas: number[];
    private static filters = new Filters();
    private localFilters: Filters;
    @Output() onSearch = new EventEmitter<any[]>();

    constructor(
        private dataService: DataService,
        private dataExchange: DataExchange
    ) {

        this.localFilters = SearchComponent.filters;
        this.localSearchTerm = SearchComponent.previousSearchTerm || '';
        this.globalMem = this.dataExchange.global();

        this.globalMem.search = (term: string, sort: string) => {
            this.search(term, sort, 0);
        }

        this.initFilterData();
    }


    ngOnInit() {
        console.log("NgOnInit");
        this.search(SearchComponent.previousSearchTerm || '', SearchComponent.previousSearchSort || '-dateAdded', 0);
    }

    ngOnDestroy() {
    }

    search(term: string, sort: string, delayMs: any = undefined): void {
        term = term.trim();
        SearchComponent.previousSearchTerm = term;
        SearchComponent.previousSearchSort = sort;

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

        this.insertFiltersIntoQuery(properties);
        this.sendSearchRequest(properties, delayMs);
    }

    private checkActiveType(name: string) {
        return SearchComponent.filters.types.length === 0 || SearchComponent.filters.types.indexOf(name) !== -1;
    }

    private insertFiltersIntoQuery(properties: any) {
        for (let name in SearchComponent.filters) {
            let value: any = SearchComponent.filters[name];

            if (name === 'types') {
                if (value.length) {
                    properties['type'] = value;
                }
                continue;
            }

            let lowerCaseName = name.substr(3).toLowerCase();

            if (value) {
                let obj = properties[lowerCaseName] || {};

                name.indexOf('min') === 0
                    ? obj['$gte'] = value
                    : obj['$lte'] = value;

                properties[lowerCaseName] = obj;
            } else if (properties[lowerCaseName]) {
                delete properties[lowerCaseName];
            }
        }
    }

    private toggleTypeFilter(name: string) {
        let index = SearchComponent.filters.types.indexOf(name);
        if (index === -1) {
            SearchComponent.filters.types.push(name);
        } else {
            SearchComponent.filters.types.splice(index, 1);
        }
        this.search(SearchComponent.previousSearchTerm, SearchComponent.previousSearchSort, 0);
    }

    private setFilter(name: string, value: number) {
        SearchComponent.filters[name] = value;
        if (!value) {
            delete SearchComponent.filters[name];
        }
        this.search(SearchComponent.previousSearchTerm, SearchComponent.previousSearchSort, 0);
    }

    private clearFilters() {
    	this.localFilters = SearchComponent.filters = new Filters();
    	this.localSearchTerm = SearchComponent.previousSearchTerm = '';
        this.search(SearchComponent.previousSearchTerm, SearchComponent.previousSearchSort, 0);
    }

    private sendSearchRequest(properties: Object, delayMs: any) {
        const keyUpDelayMs = 300 || delayMs;
        let rest = this.dataService.FASTIGHET_REST_NEW;
        let currentSearchCounter = ++this.searchCounter;

        // Wait to notice if the search-term gets altered before sending additional requests
        clearTimeout(this.timeoutKeyUp);

        this.timeoutKeyUp = setTimeout(() => {
            this.dataService.get(rest, properties).then(
                (data: any[]) => {
                    // Ignore all results other than the newest/altered search-term
                    if (currentSearchCounter == this.searchCounter) {
                        this.onSearch.emit(data);
                    }
                }
            );
        }, keyUpDelayMs);
    }

    private initFilterData() {
        this.prices = [
            500000,
            750000,
            1000000,
            1500000,
            2000000,
            3000000,
            4000000,
            5000000,
            10000000
        ];

        this.rooms = [
            1,
            1.5,
            2,
            2.5,
            3,
            4,
            5
        ];

        this.areas = [
            20,
            30,
            40,
            50,
            75,
            100
        ];
    }
}
