'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './home.routes';

export class HomeComponent {
  /*@ngInject*/
  constructor($rootScope) {
    'ngInject';
    this.rootScope = $rootScope;
    this.url = this.rootScope.path.url;
    $rootScope.$on('routeChange', function(event, path){
      this.url = path.url;
    }.bind(this));
  }
}

export default angular.module('scApp.home', [uiRouter])
  .config(routes)
  .component('home', {
    template: require('./home.html'),
    controller: HomeComponent
  })
  .name;
