'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('reset', {
      url: '/reset/:token',
      template: '<reset></reset>',
      resolve:{
        tokenCheck: function($stateParams, Notification, $q, $http, $state){
          var defer = $q.defer();
          $http.get(`/api/users/forget/${$stateParams.token}`)
            .then(
              (result) =>{
                defer.resolve()
              }
            )
            .catch((error) => {
              Notification({message: error.data.message}, 'warning');
              $state.go('forget');
              defer.resolve();
            })
          return defer.promise;
        }
      }
    });
}
