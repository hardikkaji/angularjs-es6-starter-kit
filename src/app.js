// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

import angular from 'angular';

const appModule = angular.module('webpack-tutorial', ['ui.router']);

import template from './components/home/home.html';

'ngInject';

appModule.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider.state({
        name: 'home',
        url: '/',
        component: 'home'
    });
});

function HomeController() {
    this.heading = 'Welcome to Webpack Tutorials';
}

appModule.controller('HomeController', HomeController);

'ngInject';
appModule.component('home', {
    controller: 'HomeController',
    template: template
});

export default appModule;