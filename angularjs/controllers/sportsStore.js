app
	.constant("dataUrl", "http://localhost:2403/products")
	.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

		$scope.data = {}

		$http.get(dataUrl)
			.success(function(data){
				$scope.data.products = data;
			})
			.error(function(data){
				$scope.data.error = error;
			})
	})