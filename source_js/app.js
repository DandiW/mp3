var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/gallery', {
			templateUrl: 'partials/gallery.html',
			controller: 'galleryController'
		})
		.when('/list', {
			templateUrl: 'partials/list.html',
			controller: 'listController'
		})
        .when('/detail/:rank', {
                templateUrl: 'partials/detail.html',
                controller: 'detailController'
            })
		.otherwise({
			redirectTo:'/gallery'
		});
})



