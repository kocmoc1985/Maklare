import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {DataService} from '../services/data.service';

import 'rxjs/add/operator/switchMap';

declare var google: any;

@Component({
    //#ROUTING_DETAILED
    selector: 'object-detailed',
    templateUrl: 'app/components/template/object-detailed.html',
    styleUrls: ['app/components/css/object-detailed.css']
})


export class ObjectDetailedComponent implements OnInit, AfterViewInit {

    private object: any;
    private objectImages: String[];
    private loadedImages = {};
    private broker: any;
    private map: any;
    private readMore:boolean;

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    toggleReadMore(){
        if (this.readMore){
            this.readMore = false;
        }else{
            this.readMore = true;
        }
    }

    showGoogleMap() {
        //#GOOGLE_MAP
        if (this.map) {
            return;
        }

        var location = new google.maps.LatLng(this.object.mapslat, this.object.mapslng);

        var mapProp = {
            center: location,
            zoom: 10,

        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: this.object.street
        });

    }

    bgImg(object: any) {
        return "url('images/estate/" + object.objectnr + "/main.jpg')";
    }


    registerLoadedImage(img: string) {
        this.loadedImages[img] = true;
    }

    goBack(): void {
        this.location.back();
    }

    set(data: any) {
        this.object = data[0];
        this.broker = data[0].broker;
        this.objectImages = data[0].images;
    }


    ngAfterViewInit() {
       
    }

    ngOnInit(): void {
        //#ROUTING_DETAILED
        this.route.params
            .switchMap((params: Params) => this.dataService.getFastighetById(params['id']))
            .subscribe(data => (this.set(data))); //(console.log("data",data))
                   
    }

}