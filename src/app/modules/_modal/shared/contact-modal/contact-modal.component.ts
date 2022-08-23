import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contact-modal',
	templateUrl: './contact-modal.component.html',
	styleUrls: ['./contact-modal.component.scss'],
})
export class ContactModalComponent implements OnInit {
	constructor() {}

	form = new FormGroup({
		mensagem: new FormControl(null),
	});

	ngOnInit(): void {}

	whatsapp() {
		window.open(
			`https://wa.me/5547996986738?text=${encodeURIComponent(
				this.form.get('mensagem')?.value || 'Olá, tenho interesse em seu trabalho! Podes me ajudar?'
			)}+`,
			'_blank'
		);
	}

	insta() {
		window.open('https://instagram.com/sotel.design?igshid=YmMyMTA2M2Y=', '_blank');
	}
}
