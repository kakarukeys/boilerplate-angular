'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            title: "Hello there", 
            templateUrl: 'partials/mypartial.html', 
            controller: "MyCtrl"
        })
        .otherwise({redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            /* changes title automatically on routing */
            if (current.$route) {
                $rootScope.title = current.$route.title;
            }
        });
    }]);
    