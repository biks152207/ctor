'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './admin-panel.routes';

export class AdminPanelComponent {
  /*@ngInject*/
  constructor($http, $timeout, Notification, localStorageService, $state, $rootScope) {
    'ngInject';
    this.HTTP = $http;
    this.Notification = Notification;
    this.formData = {};
    this.rootScope = $rootScope;
    this.timeout = $timeout;
    this.localStorageService = localStorageService;
    this.state = $state;
  }
  submit(form, formData){
    if (form.$valid){
      this.HTTP.post('/auth/local', formData)
        .then(
          (response) =>{
            this.localStorageService.set('token', response.data.token);
            this.HTTP.get('/api/users/me')
            .then(
              (result) =>{
                if (result.data.role != 'admin'){
                  this.Notification({message: "Your aren't authorised"}, 'warning');
                  this.localStorageService.remove('token');
                  return;
                }
                this.rootScope.adminUser = result.data;
                this.state.go('dashboard.upload');
              }
            )
          },
          (error) =>{
            this.error = error.data.message;
            this.timeout(
              () => {
                this.error = null;
              },3000)
          }
        )
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
