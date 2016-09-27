'use strict';

describe('Component: Chapter02EquivalentSystemComponent', function() {
  // load the controller's module
  beforeEach(module('scApp.chapter02-equivalent-system'));

  var Chapter02EquivalentSystemComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Chapter02EquivalentSystemComponent = $componentController('chapter02-equivalent-system', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
