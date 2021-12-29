import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { HomepageModule } from './modules/homepage/homepage.module';
import { menu, HeroIconModule } from 'ng-heroicon';

@NgModule({
	declarations: [AppComponent, HomepageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomepageModule,
		HeroIconModule.forRoot(
			{
				menu
			},
			{
				defaultHostDisplay: 'inlineBlock', // default 'none'
				attachDefaultDimensionsIfNoneFound: true // default 'false'
			}
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
