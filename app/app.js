APP = 'angularfirebase';

angular.module(APP, ['ngRoute', 'ngCookies', 'firebase']);

angular.module(APP)
	.config(function($routeProvider, $locationProvider){
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
	            templateUrl : 'app/index.html',
	            controller: 'home'
	        })
			.when('/login', {
				templateUrl: 'app/pagina/conta/logar.html',
				controller: 'login'
			})
			.when('/cadastrar', {
				templateUrl: 'app/pagina/conta/cadastrar.html',
				controller: 'login'
			})
			.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
	})
	.controller('home', function($scope, $firebaseAuth){
		$scope.url = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
		$scope.auth = $firebaseAuth();

		$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      $scope.user = firebaseUser;
	    });

		$scope.user = $scope.auth.$getAuth();
	});