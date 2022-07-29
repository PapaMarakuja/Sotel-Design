import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modules/_modal';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	openModal(id: string): void {
		this.modalService.open(id);
	}

	closeModal(id: string): void {
		this.modalService.close(id);
	}
}
