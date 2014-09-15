(function () {
    var app = angular.module('flickr-angular', [])
    app.controller('ImageController', function () {
        this.photos = photos;
    });

    var photos = {
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

