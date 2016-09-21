'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './reset.routes';

export class ResetComponent {
  /*@ngInject*/
  constructor($http, $stateParams, $timeout) {
    'ngInject';
    this.HTTP = $http
    this.timeout = $timeout;
    this.formData = {
      token: $stateParams.token
    };
  }
  submit(form, formData){
    if (form.$valid){
      this.submitted = true;
      this.HTTP.post('/api/users/changepassword', formData)
        .then(
          (result) => {
            this.message = result.data.message;
            this.submitted = false;
            this.timeout(() =>{
              this.message = null;
            },3000)
          }
        )
        .catch((error) =>{
          this.message = error.data.message;
          this.submitted = false;
          this.timeout(() =>{
            this.message = null;
          },3000)
        })
    }
  }
}

export default angular.module('scApp.reset', [uiRouter])
  .config(routes)
  .component('reset', {
    template: require('./reset.html'),
    controller: ResetComponent,
    controllerAs: 'vm'
  })
  .name;
