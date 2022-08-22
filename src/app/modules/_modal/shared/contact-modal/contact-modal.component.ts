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

	sendMessage(type: string) {
		if (type === 'zap') {
			window.open('', '_blank');
			return;
		}
		// envia e-mail.
	}
}
