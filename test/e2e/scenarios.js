'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

    it("should changes title automatically on routing", function() {
        browser().navigateTo('index.html#/pinboard');
        expect(element('title').text()).toEqual("Pinboard");
    });

});
