// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

// loading shared module
import './services/core.module';
// loading all module components
import './app.components';

const appModule = angular
	.module('angularjs-es6-starter-kit', [
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.header',
		'app.home',
		'app.user'
	]);

export default appModule;
