(function () {
    var app = angular.module('flickr-angular', [])
    app.controller('ImageController', function () {
        this.picture = pic;
    });

    var pic = {
        name: 'FoobarGem',
        price: 2.95,
        description: 'This is a test description',
        canPurchase: true
    }
})();

