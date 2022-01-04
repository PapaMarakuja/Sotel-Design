import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import {
	sun,
	moon,
	home,
	documentText,
	user,
	userGroup,
	chevronUp,
	x,
	cube,
	annotation,
	arrowUp,
	HeroIconModule
} from 'ng-heroicon';
@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		ContactComponent,
		SkillsComponent,
		ProjectsComponent,
		HomeComponent
	],
	exports: [
		ContactComponent,
		FooterComponent,
		HeaderComponent,
		SkillsComponent,
		ProjectsComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		HeroIconModule.withIcons(
			{
				annotation,
				arrowUp,
				sun,
				moon,
				home,
				documentText,
				user,
				userGroup,
				chevronUp,
				x,
				cube
			},
			{
				defaultHostDisplay: 'block'
			}
		)
	]
})
export class HomepageModule {}
