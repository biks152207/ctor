'use strict';

describe('Directive: angularThumbnail', function() {
  // load the directive's module
  beforeEach(module('scApp.angular-thumbnail'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<angular-thumbnail></angular-thumbnail>');
    element = $compile(element)(scope);
    expect(element.text()).to.equal('this is the angularThumbnail directive');
  }));
});
