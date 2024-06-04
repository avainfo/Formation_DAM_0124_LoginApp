import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {CustomItemComponent} from "../components/custom-form/custom-item.component";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule
	],
	exports: [
		CustomItemComponent
	],
	declarations: [HomePage, CustomItemComponent]
})
export class HomePageModule {}
