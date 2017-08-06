export default class HomeController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.heading = 'Welcome to Webpack Tutorials';
		this.$log.info('Activated Home View.');
	};
}
