import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal.component';
import { ContactModalComponent } from './shared/contact-modal/contact-modal.component';
import { ServiceModalComponent } from './shared/service-modal/service-modal.component';
import { HeroIconModule, x } from 'ng-heroicon';

@NgModule({
	imports: [
		CommonModule,
		HeroIconModule.withIcons({ x }, { defaultHostDisplay: 'block' }),
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [ModalComponent, ContactModalComponent, ServiceModalComponent],
	exports: [ModalComponent, ContactModalComponent, ServiceModalComponent],
})
export class ModalModule {}
