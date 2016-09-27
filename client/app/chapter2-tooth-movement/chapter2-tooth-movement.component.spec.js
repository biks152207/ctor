'use strict';

describe('Component: Chapter2ToothMovementComponent', function() {
  // load the controller's module
  beforeEach(module('scApp.chapter2-tooth-movement'));

  var Chapter2ToothMovementComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Chapter2ToothMovementComponent = $componentController('chapter2-tooth-movement', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
