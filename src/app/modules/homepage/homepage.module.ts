import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { NovaIdentidadeComponent } from './components/nova-identidade/nova-identidade.component';
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
	HeroIconModule,
} from 'ng-heroicon';
@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		SkillsComponent,
		ProjectsComponent,
		HomeComponent,
		NovaIdentidadeComponent,
	],
	exports: [
		FooterComponent,
		HeaderComponent,
		SkillsComponent,
		ProjectsComponent,
		HomeComponent,
		NovaIdentidadeComponent,
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
				cube,
			},
			{
				defaultHostDisplay: 'block',
			}
		),
	],
})
export class HomepageModule {}
