var app = angular.module('flickr-angular', []);

app.controller('ImageController', ['$scope', '$http', function ($scope, $http) {

    // IMPORTANT: replace this with your actual flickr API key
    var flickr_api_key = '1da839460541a9c57522efd19a529638';

    $scope.doFlickrSearch = function (searchText) {
        $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickr_api_key + '&text=' + searchText + '&per_page=5&page=1&format=json&nojsoncallback=1').success(function (data) {
            $scope.searchResults = data["photos"];
        });
    };

    $scope.getImageUrl = function (photo) {
        var farmId = photo.farm;
        var serverID = photo.server;
        var id = photo.id;
        var secret = photo.secret;
        var url = 'https://farm' + farmId + '.staticflickr.com/' + serverID + '/' + id + '_' + secret + '_z.jpg';
        return url;
    };

    $scope.searchResults = {};
    $scope.searchText = 'Sunset';
    $scope.doFlickrSearch($scope.searchText);
}]);

app.controller('TabController', ['$scope', function ($scope) {
    $scope.tab = 1;
    $scope.setTab = function (newValue) {
        $scope.tab = newValue;
    };
    $scope.isSet = function (tabName) {
        return $scope.tab == tabName;
    }
}]);

app.controller('ReviewController', ['$scope', function ($scope) {
    $scope.reviews = testReviews;

    $scope.addReview = function (photo_id) {
        if (typeof $scope.reviews[photo_id] === 'undefined') {
            $scope.reviews[photo_id] = [];
        }
        $scope.reviews[photo_id].push($scope.review);
        $scope.review = {};
    };

    $scope.getReviews = function (photo_id) {
        return $scope.reviews[photo_id];
    };
}]);

var testReviews = {
    "15246462712": [
        {stars: 5, author: 'manish@foo.com', body: 'well done!'}
    ],
    "15246462713": [
        {stars: 4, author: 'manish@foo.com', body: 'Can do better'}
    ]
};

