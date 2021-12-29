import { Component, OnInit } from '@angular/core';
import { HeroIconName } from 'ng-heroicon';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor() {}
	isDark: boolean = false;
	localDarkmode = JSON.parse(localStorage.getItem('isDarkmode') || '{}');

	ngOnInit(): void {
		const html = document.querySelector('html');
		if (this.localDarkmode) {
			this.isDark = this.localDarkmode;
			html?.classList.add('dark');
		} else {
			html?.classList.remove('dark');
		}
		this.darkMode();
	}

	openCloseMenu(): void {
		const menu = document.getElementsByClassName('sub-menu');
		const arrow = document.getElementById('abreMenu');
		menu[0].classList.contains('active')
			? menu[0].classList.remove('active')
			: menu[0].classList.add('active');

		arrow?.classList.contains('rotate-180')
			? arrow.classList.remove('rotate-180')
			: arrow?.classList.add('rotate-180');
	}

	toggleDarkmode() {
		this.isDark = !this.isDark;
		localStorage.setItem('isDarkmode', String(this.isDark));
		this.darkMode();
	}

	darkMode(): void {
		const html = document.querySelector('html');
		const icon = document.getElementsByClassName('header-child');

		if (this.isDark) {
			html?.classList.add('dark');
			icon[0].classList.add('active');
		} else {
			html?.classList.remove('dark');
			icon[0].classList.remove('active');
		}
	}
}
