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
	      	},
	      	"ddfhsdrh": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"sdrhsrdh": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"sdfhsdrh": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "online"
	      	},
	      	"sdrhsrdh": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"sdfhsdfh": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"sdfhsdfhsre": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"sdrhsdrh": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"sdfgsdfg": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "online"
	      	},
	      	"etwetwet": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"cvbdfhd": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"kgkfth": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"jdrgdrgj": {
	      		"nome": "Marcelo Joras",
	      		"foto": "teste2.png",
	      		"status": "ausente"
	      	},
	      	"drgsejrd": {
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

	      $scope.abrirConversa = function(amigo) {
	      	$scope.conversa = amigo;
	      };
	    });

	    $scope.toggleChat = function(){
	    	$scope.chat = !$scope.chat;
	    };
	});