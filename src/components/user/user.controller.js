export default class UserController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.$log.info('Activated User View.');
	};
}
