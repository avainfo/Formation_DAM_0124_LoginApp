import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {sadOutline} from "ionicons/icons";

@Component({
	selector: 'app-test',
	templateUrl: './test.page.html',
	styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

	constructor(public activatedRoute: ActivatedRoute) {
		activatedRoute.queryParams.forEach(value => {
			console.log(value);
		});
	}

	ngOnInit() {
		console.log("test");
	}

	test(testPage: TestPage) {
	}
}
