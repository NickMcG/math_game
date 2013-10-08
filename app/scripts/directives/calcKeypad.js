angular.module('mathGameApp').directive('calcKeypad', [function () {
  'use strict';

  return {
    templateUrl: '/views/keypad.html',
    restrict: 'EA',
    link: function postLink(scope, element, attrs) {
    }
  };
}]);
