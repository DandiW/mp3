/* Sample Controller */

/* Sample Controller */
app.controller('galleryController', ['$scope', '$http', 
function($scope, $http){
//	$scope.myName = "dandi Khandekar";
//
//	$scope.classdata = {
//		"title":"CS498RK",
//		"names": ["777", "b", "c", "d", "e"]
//	};

	$scope.change = function() {
		$scope.classdata.names.push($scope.inputValue);
		$scope.inputValue = "";
	}

	$http.get('data/imdb250.json')
        .success(function (data){
			$scope.myFile = data;
            //$scope.inputValue = "";
			console.log(data);
	       })
        .error(function (err){
			console.log(err);
	})
    


}])


app.controller('listController', ['$scope', '$http', function($scope, $http){

    
    $http.get('data/imdb250.json')
        .success(function (data){
			$scope.myFile = data;
			console.log(data);
	       })
        .error(function (err){
			console.log(err);
	})

}])

app.controller('detailController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams){

	$scope.mytitle = $routeParams.title;
	console.log($routeParams.rank);

}])