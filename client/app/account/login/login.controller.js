'use strict';

export default class LoginController {

  /*@ngInject*/
  constructor(Auth, $state, $scope, $location, $rootScope) {
    'ngInject';
    this.Auth = Auth;
    this.isLoggedIn = Auth.isLoggedInSync;
    // this.uibModal = $uibModal;
    // this.uibModalInstance = $uibModalInstance;
    this.$state = $state;
    this.errors = {};
    this.errors1 = {};

  }

  login(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
        .then(() => {
          this.$state.go('home.title')
        })
        .catch(err => {
          this.errors.login = err.message;
        });
    }
  }
  register(form, formObject) {
    this.submitted1 = true;

    if(form.$valid) {
      return this.Auth.createUser({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        email: formObject.email,
        password: formObject.password
      })
        .then((result) => {
          console.log(result);
          // Account created, redirect to home
          // this.uibModalInstance.dismiss();
          // this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors1[field] = error.message;
          });
        });
    }
  }
  closeModal(){
    // this.uibModalInstance.dismiss();
  }
  goToRegister(){
    // this.uibModalInstance.dismiss();
    // var modalInstance = this.uibModal.open({
    //   templateUrl: 'app/account/signup/signup.html',
    //   controller: 'SignupController',
    //   controllerAs: 'vm',
    //   size: 'lg'
    // });
  }
}
