'use strict';

angular.module('myApp.directives', [])
    .directive('pinboardInit', ["$timeout", function($timeout) {
        /* initialization code for the pinboard, to be run after the pinboard blocks are rendered. 
         * put the attribute after ng-repeat.
         */
        return function(scope, elm, attrs) {
            if (scope.$last) {
                $timeout(function() {
                    var gLayout = new IP.GridLayout();
                    IP.initialize(gLayout);
                }, 100);  //black magic
            };
        };
    }]);
