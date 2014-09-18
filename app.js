
var app = angular.module('flickr-angular', []);

app.controller('ImageController',['$scope',function($scope){
//    $scope.searchResults = {};
//    for (pic in testSearchResults.photo){
//        testSearchResults.photo[pic].reviews= new Array();
//    }
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
    $scope.addReview = function(photo){
        $scope.reviews[photo.id].push($scope.review);
        $scope.review = {};
        console.log($scope.reviews);
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
