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
    
//	$scope.change = function() {
//		$scope.classdata.names.push($scope.inputValue);
//		$scope.inputValue = "";
//	}

	$http.get('data/imdb250.json')
        .success(function (data){
			$scope.myFile = data;
            //$scope.inputValue = "";
			console.log(data);
	       })
        .error(function (err){
			console.log(err);
	})
    
    $scope.myGenre = function(x) {
        $scope.myGenreby = x;
    }
    


}])


app.controller('listController', ['$scope', '$http', function($scope, $http){

    $scope.inputValue = "";
    //-----------------------------------------
        


//      $scope.myOrder = function(x) {
//          $scope.myOrderby = x;
    
    
    
//          
//      };
    
    
    //-------------------------------------------------
//        var predicate = 'title';
//        $scope.setPredicate = function(predicateParam) {
//            predicate = predicateParam;
//            console.log(predicateParam);
//        };
//        $scope.order = {
//        orderBy: predicate,
//
//        toggle: function() {
//          this.orderBy = this.isAscending() ? '-' + predicate : predicate;
//        },
//
//        isAscending: function() {
//          return !this.orderBy.includes("-");
//        }
//      };
    
    
   //-----------------add two function together----------------- 

//    $scope.order = function(predicate) {
//        console.log(predicate);
//    $scope.predicate = predicate;
//    this.toggle = function() {
//          this.predicate = this.isAscending() ? '-' + predicate : predicate;
//        };
//
//    this.isAscending = function() {
//          return this.predicate === predicate;
//        }
//  };


    
    //------------------------------------
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

    $http.get('data/imdb250.json')
        .success(function (data){
			$scope.myFile = data;
			console.log(data);
	       })
        .error(function (err){
			console.log(err);
	})
	$scope.myRank = parseInt($routeParams.rank, 10); 
	console.log($routeParams.rank);
     
    
//    $scope.myGenre = function(x) {
//        $scope.myGenreby = x;
//    }
    
}])