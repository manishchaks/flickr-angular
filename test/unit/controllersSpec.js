'use strict';

describe('Flickr Angular Controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('flickr-angular'));


    describe('TabController', function(){
        var scope, $httpBackend, ctrl;
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('TabController', {$scope: scope});
        }));


        it('Should have the first tab activated by default', function() {
            expect(scope.tab).toBe(1);
        });

        it('Should set the activated tab correctly',function(){
            scope.setTab(2);
            expect(scope.isSet(2)).toBe(true);
            scope.setTab(3);
            expect(scope.isSet(3)).toBe(true);
        });
    });
    describe('ReviewController', function(){
        var scope, $httpBackend, ctrl;
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('ReviewController', {$scope: scope});
        }));

        it("Should be possible to add a review",function(){
            scope.review = {stars: 5, author: "manish@test.com", body: 'This is a test body'}
            var photoId = "15246462712";
            expect(scope.reviews[photoId].length).toBe(1);
            scope.addReview(photoId);
            expect(scope.reviews[photoId].length).toBe(2);
        });
    });
});
