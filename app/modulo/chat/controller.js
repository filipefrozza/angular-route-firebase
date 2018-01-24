angular.module(APP)
	.controller('chat', function($scope, $firebaseAuth){
		$scope.url = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
		$scope.auth = $firebaseAuth();

		$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      $scope.user = firebaseUser;

	      $scope.teste = "olar";

	      if(!$scope.user) return;

	      $scope.amigos = {
	      	"YFghawefda": {
	      		"nome": "Filipe Frozza",
	      		"foto": "teste.jpg",
	      		"status": "online"
	      	},
	      	"sadasdas": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	}
	      };

	      $scope.conversas = {
	      	"Yhawfawfaw": {
	      		"Yhawfawfaw": "oi",
	      		"meuid": "ola"
	      	}
	      };
	    });

	    $scope.toggleChat = function(){
	    	$scope.chat = !$scope.chat;
	    };
	});