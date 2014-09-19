'use strict';

describe('Flickr Angular Controllers', function () {

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('flickr-angular'));

    describe('ImageController', function () {
        var scope, $httpBackend, ctrl;
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('ImageController', {$scope: scope});
        }));


        it('Should be able to construct a direct url to the flickr image, with max size 640x640', function () {
            // Read: https://www.flickr.com/services/api/misc.urls.html
            // The flickr URL is of the format https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg

            var testSearchResults = {
                page: 1,
                pages: 4483,
                perpage: 2,
                photo: [
                    {
                        farm: 6,
                        id: "15246462712",
                        isfamily: 0,
                        isfriend: 0,
                        ispublic: 1,
                        owner: "31600622@N06",
                        secret: "fd242a9b99",
                        server: "5585",
                        title: "P1040172"
                    },
                    {
                        farm: 6,
                        id: "15246462713",
                        isfamily: 0,
                        isfriend: 0,
                        ispublic: 1,
                        owner: "31600622@N06",
                        secret: "fd242a9b99",
                        server: "5585",
                        title: "P1040174"
                    }
                ]
            };
            var photo = testSearchResults['photo'][0];
            expect(scope.getImageUrl(photo)).toBe('https://farm6.staticflickr.com/5585/15246462712_fd242a9b99_z.jpg');
        });

        it('Should be able to construct the correct query to fire to flickr, given a search text and API key', function () {
            expect(scope.constructFlickrQuery('search_text', 'some_api_key')).toBe('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=some_api_key&text=search_text&per_page=5&page=1&format=json&nojsoncallback=1');
        });

    });


    describe('TabController', function () {
        var scope, $httpBackend, ctrl;
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('TabController', {$scope: scope});
        }));


        it('Should have the first tab activated by default', function () {
            expect(scope.tab).toBe(1);
        });

        it('Should set the activated tab correctly', function () {
            scope.setTab(2);
            expect(scope.isSet(2)).toBe(true);
            scope.setTab(3);
            expect(scope.isSet(3)).toBe(true);
        });
    });
    describe('ReviewController', function () {
        var scope, $httpBackend, ctrl;
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('ReviewController', {$scope: scope});
        }));

        it("Should be possible to add a review", function () {
            scope.review = {stars: 5, author: "manish@test.com", body: 'This is a test body'}
            var photoId = "15246462712";
            expect(scope.reviews[photoId].length).toBe(1);
            scope.addReview(photoId);
            expect(scope.reviews[photoId].length).toBe(2);
        });
    });
});
