import headerComponent from './wt-header.component';

const headerModule = angular.module('wt-header', []);

// loading components, services, directives, specific to this module.
headerModule.component('wtHeader', headerComponent);

// export this module
export default headerModule;
