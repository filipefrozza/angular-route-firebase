APP = 'angularfirebase';

angular.module(APP, ['ngRoute', 'ngCookies', 'firebase']);

angular.module(APP)
	.config(function($routeProvider, $locationProvider){
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
	            templateUrl : 'app/index.html'
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
	.controller('main', function($scope, $firebaseAuth, $firebaseObject){
		$scope.url = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
		$scope.auth = $firebaseAuth();

		$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      	$scope.user = firebaseUser;

	      	var ref = firebase.database().ref();
		    var perfil = $firebaseObject(ref.child('perfil').child($scope.user.uid));

		    $scope.perfil = perfil;
	    });
	});