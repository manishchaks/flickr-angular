
var app = angular.module('flickr-angular', []);

app.controller('ImageController',['$scope',function($scope){
    $scope.searchResults = {};
    for (pic in testSearchResults.photo){
        testSearchResults.photo[pic].reviews= new Array();
    }
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
    $scope.review = {};
    $scope.addReview = function(photo){
        photo.reviews.push($scope.review);
        $scope.review = {};
    }
}]);

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
      id: "15246462712",
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
