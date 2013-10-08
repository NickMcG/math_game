angular.module('mathGameApp').service('RandomService', function RandomService() {
	'use strict';

	this.getRandom = function (min, max) {
	  var range, temp;
	  range = (max - min) + 1;
	  // 0, 10: 11 ->
	  //     0.00*11 => 0; floor(0) => 0 + 0 => 0
	  //     0.99*11 => 10.89; floor(10.89) => 10 + 0 => 10
	  // 1, 10: 10 ->
	  //     0.00*10 => 0; floor(0) => 0 + 1 => 1
	  //     0.99*10 => 9.9; floor(9.9) => 9 + 1 => 10
	  return Math.floor((Math.random()*range)+min);
	};
});
