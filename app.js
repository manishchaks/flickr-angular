// TODO
// 1. Use a pre-canned search term to talk to flickr and get data
// 2. From data get information about images and fetch URL's
// 3. Create a search form to fire the request with user-supplied input instead of using precanned data.
//


var app = angular.module('flickr-angular', []);

app.controller('ImageController',['$scope',function($scope){
    $scope.searchResults = testSearchResults;
}]);

app.controller('TabController',['$scope',function($scope){
    $scope.tab = 1;
    $scope.setTab = function(newValue){
        $scope.tab = newValue;
    }
    $scope.isSet = function(tabName){
        return $scope.tab == tabName;
    }
}]);

app.controller('ReviewController',['$scope',function($scope){
    $scope.reviews = testReviews;

    $scope.addReview = function(photo_id){
        if(typeof $scope.reviews[photo_id] === 'undefined'){
            $scope.reviews[photo_id] = new Array();
        }
        $scope.reviews[photo_id].push($scope.review);
        $scope.review = {};
    };

    $scope.getReviews = function(photo_id){
        return $scope.reviews[photo_id];
    };
}]);

var testReviews = {
    "15246462712": [{stars: 5, author: 'manish@foo.com', body: 'well done!'}],
    "15246462713": [{stars: 4, author: 'manish@foo.com', body: 'Can do better'}]
};

var testSearchResults = {
  page: 1,
  pages: 4483,
  perpage: 100,
  photo:[
    {
      farm: 6,
      id: "15246462712",
      isfamily: 0,
      isfriend: 0,
      ispublic: 1,
      owner: "31600622@N06",
      secret: "fd242a9b99",
      server: "5585",
      title:    "P1040172"
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
      title:    "P1040174"
    }
  ]
}
