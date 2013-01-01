'use strict';

/* jasmine specs for controllers go here */
describe('PinboardController test', function() {
    describe('PinboardController', function() {
        var scope, controller, $http;
        scope = {};
        controller = new PinboardController(scope);
        
        it('should read 7 usecases ', function() {
            expect(scope.usecases.length).toBe(7);
        });
    });
});
