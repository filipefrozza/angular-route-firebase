angular.module(APP)
	.controller('login', function($scope, $cookies, $firebaseAuth, authenticate){
		authenticate.getAuth($firebaseAuth);

		$scope.logar = function(user){
			authenticate.logar(user, $cookies);
		};

		$scope.cadastrar = function(user) {
			authenticate.cadastrar(user);
		};
	});