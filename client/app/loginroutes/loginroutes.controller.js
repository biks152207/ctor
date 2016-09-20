'use strict';
(function(){

class LoginroutesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('scApp')
  .component('loginroutes', {
    templateUrl: 'app/loginroutes/loginroutes.html',
    controller: LoginroutesComponent
  });

})();
