// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

// making sure my files load so we need to import each module here.
import './components/wt-header';
import './components/home';
import './components/user';
import routerHelper from './services/router-helper/router-helper.service';

const appModule = angular
	.module('angularjs-es6-starter-kit', [
		// 3rd party modules
		'ui.router',
		// application specific modules
		'wt-header',
		'wt-home',
		'wt-user'
	]);

//configuring all routes via `routerHelper`
appModule.config(routerHelper);

export default appModule;
