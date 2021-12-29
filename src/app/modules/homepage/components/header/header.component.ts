import { Component, OnInit } from '@angular/core';
import { HeroIconName } from 'ng-heroicon';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor() {}
	isDark = false;
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
		menu[0].classList.contains('active')
			? menu[0].classList.remove('active')
			: menu[0].classList.add('active');
	}

	toggleDarkmode() {
		this.isDark = !this.isDark;
		localStorage.setItem('isDarkmode', String(this.isDark));
		this.darkMode();
	}

	darkMode(): void {
		const html = document.querySelector('html');

		if (this.isDark) {
			html?.classList.add('dark');
		} else {
			html?.classList.remove('dark');
		}
	}
}
