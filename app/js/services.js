'use strict';

angular.module('myApp.services', ['ngResource'])
    .factory('rest', function($resource) {
        return $resource('../api/get/:usecaseId/:granularity/:start-:end', {}, {
            //return $resource('api/device-analytics/24h/data.json', {}, {
            query: {
                method: 'GET',
                params: {
                    start:'start_date',
                    end:'end_date',
                    tzOffset: (new Date().getTimezoneOffset())
                },
                isArray:false
            }
        });
    });
