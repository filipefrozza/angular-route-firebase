angular.module(APP)
	.factory('authenticate', function(){
		var auth;

		var getAuth = function(firebaseAuth, callback){
			auth = firebaseAuth();

			auth.$onAuthStateChanged(function(user) {
		      	if(callback){
		      		callback(user);
		      	}
		    });
		};

		var logar = function(user, cookies){
			auth.$signInWithEmailAndPassword(
				user.email, 
				user.senha
			).then(function(user){
				alert('logou como :' + user.uid);
				cookies.putObject('user', user);
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

		var cadastrar = function(user){
			auth.$createUserWithEmailAndPassword(
				user.email,
				user.senha
			).then(function(firebaseUser) {
				alert("criado");
				console.log("User " + firebaseUser.uid + " created successfully!");
				window.location.href = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'')+"/login";
			}).catch(function(error) {
				console.error("Error: ", error);
			});
		};

		return {
			getAuth: getAuth,
			logar: logar,
			cadastrar: cadastrar,
			auth: auth
		};
	});