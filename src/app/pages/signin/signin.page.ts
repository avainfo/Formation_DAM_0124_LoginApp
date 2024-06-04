import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.page.html',
	styleUrls: ['./signin.page.css'],
})
export class SigninPage implements OnInit {

	constructor(private navCtrl: NavController, private router: Router) {
	}

	ngOnInit() {

		const currentNav = this.router.getCurrentNavigation();
		// @ts-ignore
		document.getElementById("email").value = currentNav?.extras.state.user.email;
		// @ts-ignore
		document.getElementById("password").value = currentNav?.extras.state.user.password;
	}

	back() {
		this.navCtrl.back();
	}

	onSubmit() {

	}

	onDataChange(id: string, $event: any) {

	}

	signIn() {
		// @ts-ignore
		localStorage.setItem("email", document.getElementById("email").value);
		this.navCtrl.back();
	}

}
