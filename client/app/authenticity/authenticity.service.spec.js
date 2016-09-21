'use strict';

describe('Service: authenticity', function() {
  // load the service's module
  beforeEach(module('scApp.authenticity'));

  // instantiate service
  var authenticity;
  beforeEach(inject(function(_authenticity_) {
    authenticity = _authenticity_;
  }));

  it('should do something', function() {
    expect(!!authenticity).to.be.true;
  });
});
