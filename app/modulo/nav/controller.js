angular.module(APP)
	.controller('nav', function($scope, $cookies, $firebaseAuth){
		$scope.auth = $firebaseAuth();
		$scope.logout = function(){
			$scope.auth.$signOut();
			$cookies.remove('user');
			window.location.reload();
		}
	});