import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() { }
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

	openCloseMenu(open: boolean): void {
		const menu = document.querySelector('#subMenu');

		if (menu) {
			if (open) {
				menu.classList.remove('hidden');
			} else {
				menu.classList.add('hidden');
			}
		}
	}

	toggleDarkmode() {
		this.isDark = !this.isDark;
		localStorage.setItem('isDarkmode', String(this.isDark));
		this.darkMode();
	}

	darkMode(): void {
		const toggle = document.querySelector('#switch');
		const html = document.querySelector('html');

		if (this.isDark) {
			html?.classList.add('dark');
			toggle?.classList.remove('bg-b-yellow', '-translate-x-2');
			toggle?.classList.add('bg-dark-100', 'translate-x-full');
		} else {
			html?.classList.remove('dark');
			toggle?.classList.add('bg-b-yellow', '-translate-x-2');
			toggle?.classList.remove('bg-dark-100', 'translate-x-full');
		}
	}
}
