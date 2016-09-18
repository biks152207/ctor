'use strict';

import angular from 'angular';

export default angular.module('scApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
