(function () {
    var app = angular.module('flickr-angular', []);

    app.controller('ImageController', function () {
        for (pic in searchResults.photo){
            searchResults.photo[pic].reviews= new Array();
        }
        this.searchResults = searchResults;

    });

    app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };

    });

    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(photo){
            photo.reviews.push(this.review);
            this.review = {};
        };
    });

    var searchResults = {
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
                title: 	"P1040172"
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
                title: 	"P1040174"
            }
        ]
    }
})();

