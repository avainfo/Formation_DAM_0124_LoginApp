import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.css'],
})
export class HomePage {

	constructor(public router: Router, activatedRoute: ActivatedRoute) {
	}

	test() {
		console.log("test");
	}

	onSubmit() {
		console.log("onSubmit");

		this.router.navigate(['/test'], {queryParams: {"test": "coucou"}});
	}
}
