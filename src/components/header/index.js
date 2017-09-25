import headerComponent from './header.component';

const headerModule = angular.module('app.header', []);

// loading components, services, directives, specific to this module.
headerModule.component('appHeader', headerComponent);

// export this module
export default headerModule;
