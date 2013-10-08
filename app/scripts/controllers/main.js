angular.module('mathGameApp').controller('MainCtrl', ['$scope', '$modal', 'RandomService', function ($scope, $modal, RandomService) {
	'use strict';

    var defaultGuess = "";

    // Set up defaults
    $scope.problems = [];
    $scope.numberProbs = 5;
    $scope.minAnswer = 0;
    $scope.maxAnswer = 10;
    $scope.minItem = 0;
    $scope.maxItem = 10;

    function generateProblem (index, minAnswer, maxAnswer, minItem, maxItem) {
        var item1 = RandomService.getRandom(minItem, maxItem),
            answer = RandomService.getRandom(item1, maxAnswer);
        return {
            'item1': item1,
            'answer': answer,
            'item2': answer - item1,
            'unchecked': true,
            'correct': false,
            'incorrect': false,
            'guess': defaultGuess,
            'index': index,
            'active': index === 0
        };
    }

    $scope.setProblems = function () {
        $scope.problems.length = 0;
        for(var i = 0;i < $scope.numberProbs;++i) {
            $scope.problems.push(generateProblem(i, $scope.minAnswer,
                $scope.maxAnswer, $scope.minItem, $scope.maxItem));
        }
    };

    $scope.setProblems();

    $scope.openConfig = function () {
        var modalInstance = $modal.open({
            templateUrl: '/views/config_modal.html',
            controller: 'ConfigCtrl',
            resolve: {
                cfg: function () {
                    return {
                        'numberProbs': $scope.numberProbs,
                        'minAnswer': $scope.minAnswer,
                        'maxAnswer': $scope.maxAnswer,
                        'minItem': $scope.minItem,
                        'maxItem': $scope.maxItem
                    };
                }
            }
        });

        modalInstance.result.then(function (cfg) {
            $scope.numberProbs = cfg.numberProbs;
            $scope.minAnswer = cfg.minAnswer;
            $scope.maxAnswer = cfg.maxAnswer;
            $scope.minItem = cfg.minItem;
            $scope.maxItem = cfg.maxItem;
            $scope.setProblems();
        }, function () { });
    };

    $scope.getActiveProblem = function() {
        for(var i in $scope.problems) {
            if ($scope.problems[i].active) {
                return $scope.problems[i];
            }
        }
        return null;
    }

    $scope.$on('keypadNumber', function (event, number) {
        var prob = $scope.getActiveProblem();
        if (prob !== null) {
            if (prob.guess === defaultGuess) {
                prob.guess = 0;
            } else if (prob.incorrect) {
                prob.guess = 0;
                prob.incorrect = false;
                prob.unchecked = true;
            }
            prob.guess = (prob.guess * 10) + number;
        }
    });

    $scope.$on('keypadClear', function () {
        var prob = $scope.getActiveProblem();
        if (prob !== null) {
            prob.guess = defaultGuess;
        }
    });

    $scope.$on('keypadCheck', function () {
        var prob = $scope.getActiveProblem();
        if (prob !== null) {
            prob.unchecked = false;
            if (prob.guess === prob.answer) {
                prob.correct = true;
            } else {
                prob.incorrect = true;
            }
        }
    });
}]);
