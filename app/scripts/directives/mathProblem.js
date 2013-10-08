angular.module('mathGameApp').directive('mathProblem', [function () {
  'use strict';

  return {
    templateUrl: '/views/mathProblem.html',
    restrict: 'EA',
	scope: {
        definition: '='
    },
	controller: 'ProblemController',
    link: function postLink($scope, $element, $attrs) {
    }
  };
}]);
