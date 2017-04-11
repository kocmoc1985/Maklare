import { Component } from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'sell',
    templateUrl: 'app/components/template/sell.html',
    styleUrls: ['app/components/css/sell.css'],
})

export class SellComponent {

	email: string;
	phoneNumber: string;
	sent: boolean = false;

	constructor(private http: Http) {}

	//send mail
	registerMail(){
		this.sendContactInfo({email:this.email});
	}
	//send phonenumber
	registerPhone(){
		this.sendContactInfo({phoneNumber:this.phoneNumber});
	}

	sendContactInfo(data: Object){
		this.sent = true;
		let _observable = this.http.post("/register-contact-info", data);
		_observable.subscribe();
		console.log("SHOULD SEND",data,"HA",this.http);
	}


}