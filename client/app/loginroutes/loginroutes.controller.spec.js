'use strict';

describe('Component: LoginroutesComponent', function () {

  // load the controller's module
  beforeEach(module('scApp'));

  var LoginroutesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LoginroutesComponent = $componentController('LoginroutesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
