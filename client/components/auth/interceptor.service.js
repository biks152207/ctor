'use strict';

export function authInterceptor($rootScope, $q, $cookies, $injector, Util, localStorageService) {
  'ngInject';

  var state;
  return {
    // Add authorization token to headers
    request(config) {
      config.headers = config.headers || {};
      if(($cookies.get('token') && Util.isSameOrigin(config.url)) || localStorageService.get('token')) {
        var token = $cookies.get('token') ? $cookies.get('token') : localStorageService.get('token');
        console.log(token);
        config.headers.Authorization = 'Bearer ' + token
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError(response) {
      if(response.status === 401) {
        // (state || (state = $injector.get('$state')))
        // .go('login');
        // remove any stale tokens
        $cookies.remove('token');
      }
      return $q.reject(response);
    }
  };
}
