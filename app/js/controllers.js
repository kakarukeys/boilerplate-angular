'use strict';

angular.module('myApp.controllers', [])
    .controller('MyCtrl', ["$scope", function($scope) {
        $scope.msg = "Hello World!";
    }]);
    