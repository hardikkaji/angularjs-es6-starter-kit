export default class UserService {
	constructor(
		$http
	) {
		'ngInject';

		this.$http = $http;
	}

	get = () => {
		return this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.data);
	};
}
