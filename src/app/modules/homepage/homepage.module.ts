import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {
	sun,
	moon,
	home,
	documentText,
	user,
	userGroup,
	chevronUp,
	x,
	annotation,
	arrowUp,
	HeroIconModule
} from 'ng-heroicon';
@NgModule({
	declarations: [HeaderComponent, FooterComponent, ContactComponent, SkillsComponent, ProjectsComponent],
	exports: [ContactComponent, FooterComponent, HeaderComponent, SkillsComponent, ProjectsComponent],
	imports: [
		CommonModule,
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
				x
			},
			{
				defaultHostDisplay: 'block'
			}
		)
	]
})
export class HomepageModule {}
