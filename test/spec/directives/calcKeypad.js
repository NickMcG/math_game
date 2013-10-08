'use strict';

describe('Directive: calcKeypad', function () {

  // load the directive's module
  beforeEach(module('mathGameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<calc-keypad></calc-keypad>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the calcKeypad directive');
  }));
});
