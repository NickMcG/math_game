angular.module('mathGameApp').controller('ConfigCtrl', ['$scope', '$modalInstance', 'cfg', function ($scope, $modalInstance, cfg) {
    'use strict';

    console.log('cfg: ' + cfg);

    $scope.cfg = cfg;

    $scope.ok = function () {
        $modalInstance.close($scope.cfg);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
