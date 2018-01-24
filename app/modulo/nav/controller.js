angular.module(APP)
	.controller('nav', function($scope, $firebaseAuth){
		$scope.auth = $firebaseAuth();
		$scope.logout = function(){
			$scope.auth.$signOut();
			window.location.reload();
		}
	});