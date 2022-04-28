import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
	skills = [
		{
			title: 'Identidade visual',
			cards: [
				{
					cardTitle: 'Logo',
					cardText: 'Faço logos nesse caralho',
					cardIcon: 'uil uil-palette',
				},
				{
					cardTitle: 'Sub logos',
					cardText: 'Faço sub logos nesse caralho',
					cardIcon: 'uil uil-paint-tool	',
				},
				{
					cardTitle: `Marca d'água`,
					cardText: `Faço marca d'água nesse caralho`,
					cardIcon: 'uil uil-tear	',
				},
				{
					cardTitle: 'Pacote completo',
					cardText: `Faço pacote completo nesse caralho`,
					cardIcon: 'uil uil-tear	',
				},
			],
		},
		{
			title: 'Redes sociais',
			cards: [
				{
					cardTitle: 'Capa de destaque',
					cardText: 'Capinha pra caceta do destaque',
					cardIcon: 'uil uil-instagram',
				},
				{
					cardTitle: 'Perfil do insta',
					cardText: 'Perfil pra caceta do insta',
					cardIcon: 'uil uil-user-circle',
				},
			],
		},
		{
			title: 'Only fans',
			cards: [
				{
					cardTitle: 'aiugadsjhgsndjk',
					cardText: 'Pack ',
					cardIcon: 'uil uil-package',
				},
			],
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
