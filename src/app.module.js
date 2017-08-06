// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

import angular from 'angular';

// making sure my files load so we need to import each module here.
import homeModule from './components/home';
import headerModule from './components/wt-header';
import routerHelper from './services/router-helper/router-helper.service';

const appModule = angular
	.module('webpack-tutorial', [
		// 3rd party modules
		'ui.router',
		// application specific modules
		'wt-header',
		'wt-home'
	]);

//configuring all routes via `routerHelper`
appModule.config(routerHelper);

export default appModule;
