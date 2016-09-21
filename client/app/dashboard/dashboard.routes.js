'use strict';
import UploadController from './upload.controller';
export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>',
      resolve:{
        resolverData: function($q, authenticity, Notification, $state, $rootScope){
          var defer = $q.defer();
          return authenticity.check()
            .then((result) =>{
              if (result.role == 'admin'){
                $rootScope.adminUser = result;
                defer.resolve(result);
              }else{
                Notification({message: 'Access denied'}, 'warning');
                $state.go('admin-panel');
                defer.resolve();
              }
            })
            .catch((error) =>{
               Notification({message: 'Access denied'}, 'warning');
               $state.go('admin-panel');
               defer.resolve();
            })
          return defer.promise;
        }
      },
      abstract:true
    })
    .state('dashboard.upload',{
      url: '/upload',
      templateUrl: 'app/dashboard/upload.html',
      controller: UploadController,
      controllerAs: 'vm'
    })
}
