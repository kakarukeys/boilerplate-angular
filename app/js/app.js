'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/usecase/:usecaseId', {
            title: "Usecase", 
            templateUrl: 'partials/usecase.html', 
            controller: DeviceAnalyticController
        })
        .otherwise({redirectTo: '/pinboard'});
    }])
    .run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            /* changes title automatically on routing */
            if (current.$route) {
                $rootScope.title = current.$route.title;
            }
        });
    }]);
    
/* 
 setting up namespace and libraries
 */
var IP = (typeof IP === 'undefined') ? {} : IP;
