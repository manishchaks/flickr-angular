var app = angular.module('flickr-angular', []);

app.controller('ImageController', ['$scope', '$http', function ($scope, $http) {

    // IMPORTANT: replace this with your actual flickr API key
    var flickr_api_key = 'INSERT_API_KEY';

    var search_text = 'Sunset Photo';

    $scope.doFlickSearch = function (search_text) {
        $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickr_api_key + '&text=' + search_text + '&per_page=5&page=1&format=json&nojsoncallback=1').success(function (data) {
            $scope.searchResults = data["photos"];
//            var photo = $scope.searchResults['photo'][0]
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

    $scope.searchResults = testSearchResults;
    $scope.doFlickSearch(search_text);
}]);

app.controller('TabController', ['$scope', function ($scope) {
    $scope.tab = 1;
    $scope.setTab = function (newValue) {
        $scope.tab = newValue;
    }
    $scope.isSet = function (tabName) {
        return $scope.tab == tabName;
    }
}]);

app.controller('ReviewController', ['$scope', function ($scope) {
    $scope.reviews = testReviews;

    $scope.addReview = function (photo_id) {
        if (typeof $scope.reviews[photo_id] === 'undefined') {
            $scope.reviews[photo_id] = new Array();
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
}
