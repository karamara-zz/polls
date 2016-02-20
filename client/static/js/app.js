var pollApp = angular.module('pollApp',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'/views/partial/login.html',
		controller: "userController",
		controllerAs:"userCtrl"
	})
	.when('/dashboard',{
		templateUrl:'/views/partial/dashboard.html',
	})
	.when('/create',{
		templateUrl:'/views/partial/create.html',
	})
	.when('/vote',{
		templateUrl:'/views/partial/vote.html',
	})
	.otherwise({
		redirectTo:'/'
	})
	}
])