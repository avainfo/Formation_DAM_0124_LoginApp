import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'test',
		loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
	},
	{
		path: 'first-page',
		loadChildren: () => import('./pages/first-page/first-page.module').then(m => m.FirstPagePageModule)
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },


];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
