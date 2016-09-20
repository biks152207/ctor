'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './admin-panel.routes';

export class AdminPanelComponent {
  /*@ngInject*/
  constructor() {
    'ngInject';
    this.formData = {};
  }
  submit(form){
    if (form.$valid){
      
    }
  }
}

export default angular.module('scApp.admin-panel', [uiRouter])
  .config(routes)
  .component('adminPanel', {
    template: require('./admin-panel.html'),
    controller: AdminPanelComponent,
    controllerAs: 'vm'
  })
  .name;
