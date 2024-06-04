import {Component} from '@angular/core';
import {NavigationExtras} from "@angular/router";
import {User} from "../user";
import {NavController} from "@ionic/angular";

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.css'],
})
export class HomePage {
	private readonly user: User;

	constructor(private navCtrl: NavController) {
		this.user = new User("", "", "", "");
	}

	test() {
		console.log("test");
	}

	onSubmit() {
		console.log("onSubmit");
		let navigationExtras: NavigationExtras = {
			state: {
				user: this.user,
				test: "coucou"
			}
		};
		this.navCtrl.navigateForward("test", navigationExtras)
			.then(() => console.log("Est parti de la page"));
	}

	onDataChange(id: string, event: any) {
		const value = event.detail.value;
		switch (id) {
			case "firstName":
				this.user.firstName = value;
				break;
			case "lastName":
				this.user.lastName = value;
				break;
			case "email":
				this.user.email = value;
				break;
			case "password":
				this.user.password = value;
				break;
			default:
				console.log("Field Error")
				break;
		}
		console.log(this.user)
	}
}
