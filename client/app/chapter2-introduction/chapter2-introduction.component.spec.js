'use strict';

describe('Component: Chapter2IntroductionComponent', function() {
  // load the controller's module
  beforeEach(module('scApp'));

  var Chapter2IntroductionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Chapter2IntroductionComponent = $componentController('chapter2-introduction', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
