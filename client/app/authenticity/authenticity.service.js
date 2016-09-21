'use strict';
const angular = require('angular');

/*@ngInject*/
export function authenticityService($http, $rootScope, $q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  'ngInject';
  var service = {};

  service.check = check;

  function check(){
    var defer = $q.defer();
    if ($rootScope.adminUser){
      defer.resolve($rootScope.adminUser)
    }else{
      $http.get('/api/users/me')
        .then(
          (response) =>{
            $rootScope.adminUser = response.data;
            defer.resolve(response.data);
          }
        )
        .catch(
          (error) =>{
            defer.reject(error);
          }
        )
    }
    return defer.promise;
  }
  return service;
}

export default angular.module('scApp.authenticity', [])
  .service('authenticity', authenticityService)
  .name;
