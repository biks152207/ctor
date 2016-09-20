'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {

  constructor(Auth, $uibModal, $location, $scope, $rootScope, $state) {
    'ngInject';
    this.rootScope = $rootScope;
    this.rootScope.path = {};
    console.log($state.current);
    // this.rootScope.path.url = $state.current.url;
    this.uibModal = $uibModal;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    $rootScope.$on('routeChange', function(event, path){
      this.rootScope.path.url = path.url;
    }.bind(this));
    $scope.$watch(() =>{
      return $location.path();
    },
    (value) => {
      if (value){
        this.rootScope.path.url = value;
        this.rootScope.$emit('routeChange', this.rootScope.path);

      }
    })
  }
  openLogin(){
    var modalInstance = this.uibModal.open({
      templateUrl: 'loginModal.html',
      controller: 'LoginController',
      controllerAs: 'vm',
      size: 'md'
    });
  }
  goToRegister(){
    var modalInstance = this.uibModal.open({
      templateUrl: 'signupModal.html',
      controller: 'SignupController',
      controllerAs: 'vm',
      size: 'lg'
    });
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
