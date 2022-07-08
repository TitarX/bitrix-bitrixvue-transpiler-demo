/**
 * Demo Loader
 *
 * @package demo
 * @subpackage local
 * @copyright 2001-2022 Bitrix
 */

import {BitrixVue} from 'ui.vue3';
import {Application} from './components/application';

export class DemoApplication
{
	constructor(rootNode): void
	{
		this.rootNode = document.querySelector(rootNode);
	}

	run(): void
	{
		BitrixVue.createApp({
			name: 'Demo Application',
			components: {
				Application
			},
			template: '<Application/>'
		}).mount(this.rootNode);
	}
}