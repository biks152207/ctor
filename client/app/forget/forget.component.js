'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './forget.routes';

export class ForgetComponent {
  /*@ngInject*/
  constructor($http, $timeout) {
    this.timeout = $timeout;
    this.submitted = false;
    this.HTTP = $http;
    this.formData = {};
  }
  submit(form, formData){
    if (form.$valid){
      this.submitted = true;
      this.HTTP.post('/api/users/forget',formData)
        .then(
          (result) =>{
            this.submitted = false;
            this.message = result.data.message;
            this.timeout(() =>{
              this.message = null;
            }, 3000)
          }
        )
        .catch((err) => {
          this.submitted = false;
          this.message = err.data.message;
          this.timeout(() =>{
            this.message = null;
          },3000)
        })
    }
  }
}

export default angular.module('scApp.forget', [uiRouter])
  .config(routes)
  .component('forget', {
    template: require('./forget.html'),
    controller: ForgetComponent,
    controllerAs: 'vm'
  })
  .name;
