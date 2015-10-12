var App = angular.module("AngularJSProject", ["ngResources"]);


var ctrl = function($scope, $http, $location){
	$location.path("/AngularJSProject/index.html");
};
ctrl.$inject = ["$scope", "$http", "$location"];

App.config(["$routeProvider", function($routes) {
	
	$route.when('/', {
		templateUrl : '/templates/home.html',
		controller : ctrl
	});
	
	$route.when('/register', {
		templateUrl :  '/templates/register.html',
		controller : ctrl
	});
	
	$routes.otherwise({
		redirectTo :'/'
	});
}]);

var Somecontroller = function($scope, $http, $location){
	$scope.value = "Somecontroller"; 
};

Somecontroller.$inject = ['$scope',  '$http', '$location'];



