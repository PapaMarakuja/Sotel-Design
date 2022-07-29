import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
}
