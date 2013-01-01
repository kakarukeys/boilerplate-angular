'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
    beforeEach(module('myApp.directives'));

    describe("d3-visualization", function() {
        var scope, result = {}, temp, element;

        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            scope.data = [1, 2, 3];
            scope.testMsg = "world";
            scope.settings = {chartType: "StackedBarChart", color: "red"};

            /* monkey patching */
            temp = IP.D3Visualization.StackedBarChart;
            IP.D3Visualization.StackedBarChart = function(settings) {
                var that = this;

                this.draw = function(vis, scope) {
                    result.settings = settings;
                    result.vis = vis;
                    result.data = data;
                    scope.$parent.testMsg = "draw called";
                };

                this.join = function(vis, data, scope) {
                    result.vis = vis;
                    result.data = data;
                    scope.$parent.testMsg = "join called";
                };
            };

            var markup = '<div><p>hello {{ testMsg }}</p><d3-visualization data="data" settings="settings"></d3-visualization></div>';
            element = $compile(markup)(scope);
            scope.$apply();
        }));

        afterEach(function() {
            IP.D3Visualization.StackedBarChart = temp;
        });

        it("should draw something if some data and settings are provided", function() {
            expect(result.settings.color).toEqual("red");
            expect(result.vis.toString()).toEqual("[object HTMLUnknownElement]");
            expect(result.data).toEqual([1, 2, 3]);
            expect(element.find("p").eq(0).text()).toEqual("hello draw called");
        });

    });

});
