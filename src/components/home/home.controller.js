export default class HomeController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.heading = 'Welcome to AngularJS ES6 Starter-Kit';
		this.$log.info('Activated Home View.');
	};
}
