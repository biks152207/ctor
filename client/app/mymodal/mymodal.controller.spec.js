'use strict';

describe('Controller: MymodalCtrl', function() {
  // load the controller's module
  beforeEach(module('scApp.mymodal'));

  var MymodalCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    MymodalCtrl = $controller('MymodalCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
