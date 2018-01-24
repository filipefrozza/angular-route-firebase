angular.module(APP)
	.controller('login', function($scope, $cookies, $firebaseAuth){
		$scope.url = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
		$scope.auth = $firebaseAuth();

		$scope.logar = function(user) {
			$scope.auth.$signInWithEmailAndPassword(
				user.email, 
				user.senha
			).then(function(user){
				alert('logou como :' + user.uid);
				$cookies.putObject('user', user);
				document.location.href = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
			}, function(error){
				if(error == 'INVALID_EMAIL') {
					console.log('Email invalido ou não cadastrado');
				}else if(error == 'INVALID_PASSWORD') {
					console.log('Senha inválida');
				}else{
					console.log(error);
				}
			});
		};

		$scope.cadastrar = function(user) {
			$scope.auth.$createUserWithEmailAndPassword(
				user.email,
				user.senha
			).then(function(firebaseUser) {
				alert("criado");
				console.log("User " + firebaseUser.uid + " created successfully!");
				window.location.href = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'')+"/login";
			}).catch(function(error) {
				console.error("Error: ", error);
			});
		}
	});