import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user";
import {NavController} from "@ionic/angular";

@Component({
	selector: 'app-test',
	templateUrl: './test.page.html',
	styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

	private user: User;

	constructor(private router: Router, private navCtrl: NavController) {
		// @ts-ignore
		this.user = this.router.getCurrentNavigation().extras.state.user;
	}

	ngOnInit() {
		// @ts-ignore
		document.getElementById("firstName").innerHTML = this.user.firstName;
		// @ts-ignore
		document.getElementById("lastName").innerHTML = this.user.lastName;
		// @ts-ignore
		document.getElementById("email").innerHTML = this.user.email;
	}

	back() {
		console.log("Retour")
		this.navCtrl.back();
	}
}
