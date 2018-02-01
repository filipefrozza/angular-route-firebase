angular.module(APP)
	.controller('pessoa', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject, authenticate){
		var callback = function(user){
			$scope.user = user;

	      	var ref = firebase.database().ref();
		    var pessoas = $firebaseArray(ref.child('perfil'));

		    $scope.pessoas = pessoas;
		};

		$scope.adicionarPessoa = function(pessoa){
			var novaPessoa = angular.copy(pessoa);
			delete novaPessoa.$id;
			delete novaPessoa.$priority;
			delete novaPessoa.$$hashKey;

			console.log(novaPessoa);

			var ref = firebase.database().ref();
			ref.child('amigos').child($scope.user.uid).child(pessoa.uid).set(novaPessoa);

			console.log(amigo);
		};

		authenticate.getAuth($firebaseAuth, callback);		
	});