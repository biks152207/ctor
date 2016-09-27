'use strict';

describe('Component: Chapter02EquivalentUsageComponent', function() {
  // load the controller's module
  beforeEach(module('scApp.chapter02-equivalent-usage'));

  var Chapter02EquivalentUsageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Chapter02EquivalentUsageComponent = $componentController('chapter02-equivalent-usage', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
