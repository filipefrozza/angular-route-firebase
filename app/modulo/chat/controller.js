angular.module(APP)
	.controller('chat', function($scope, $firebaseAuth, $cookies, $firebaseArray){
		var callback = function(){
			var ref = firebase.database().ref();
		    var amigos = $firebaseArray(ref.child('amigos').child($scope.user.uid));

	      	$scope.amigos = amigos;
		};

		// auth.autenticar($scope, callback);

		$scope.auth = $firebaseAuth();

		$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      	$scope.user = firebaseUser;

	      	if(!$scope.user) return;

	      	callback();
	    });

      	$scope.abrirConversa = function(amigo) {
	      	$scope.emConversa = true;

	      	var ref = firebase.database().ref();
	      	var mensagens = $firebaseArray(ref.child('amigos').child($scope.user.uid).child(amigo.uid).child('conversa'));

	      	$scope.conversa = {
	      		amigo: amigo,
	      		mensagens: mensagens
	      	};
      	};

	    $scope.toggleChat = function(){
	    	$scope.chat = !$scope.chat;
	    };
	});