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
			// novaPessoa.key = pessoa.uid;

			console.log(novaPessoa);

			var ref = firebase.database().ref();
			ref.child('amigos').child($scope.user.uid).child(pessoa.uid).set(novaPessoa);

		    // for(atributo in pessoa){
		    // 	amigo[atributo] = pessoa[atributo];
		    // }
		    // amigo[pessoa.uid] = pessoa;
		    // amigo.key = pessoa.uid;


			console.log(amigo);

		    // amigo.$save().then(function(ref){
		    // 	console.log(ref.key === amigo.$id);
		    // }, function(e){
		    // 	console.log(e);
		    // });
		};

		authenticate.getAuth($firebaseAuth, callback);		
	});