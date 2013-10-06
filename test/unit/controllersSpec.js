'use strict';

describe('controllers', function() {
    beforeEach(module('myApp.controllers'));

    describe('PinboardController', inject(function(PinboardController) {
        var scope, controller, $http;
        scope = {};
        controller = new PinboardController(scope);
        
        it('should read 7 usecases ', function() {
            expect(scope.usecases.length).toBe(7);
        });
    }));
});
