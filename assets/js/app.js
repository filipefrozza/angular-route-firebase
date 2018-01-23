angular.module('angularfirebase', ['ngRoute', 'ngCookies', 'firebase']);

angular.module('angularfirebase')
	.config(function($routeProvider, $locationProvider){
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
	            templateUrl : 'view/home.html',
	            controller: 'home'
	        })
			.when('/teste', {
				templateUrl: 'view/teste.html',
				controller: 'teste'
			})
			.when('/produtos', {
				templateUrl: 'view/produtos.html',
				controller: 'produto'
			})
			.when('/login', {
				templateUrl: 'view/login.html',
				controller: 'login'
			})
			.when('/cadastrar', {
				templateUrl: 'view/cadastrar.html',
				controller: 'login'
			})
			.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
	})
	.controller('produto', function($scope, $firebaseArray, $firebaseAuth){
		$scope.url = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
		$scope.auth = $firebaseAuth();

		$scope.user = $scope.auth.$getAuth();

		$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      	$scope.user = firebaseUser;

			if(!$scope.user) return;

			var ref = firebase.database().ref();

			var refProduto = ref.child('produto');
		
			// var syncObject = $firebaseObject(ref);

			PRODUTOS = $firebaseArray(refProduto);

			$scope.produtos = PRODUTOS;
	    });
	})
	.controller('home', function($scope, $firebaseAuth){
		$scope.url = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
		$scope.auth = $firebaseAuth();

		$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      $scope.user = firebaseUser;
	    });

		$scope.user = $scope.auth.$getAuth();
	})
	.controller('login', function($scope, $cookies, $firebaseAuth){
		$scope.url = window.location.origin+(window.location.origin=='http://localhost'?'/angular-route-firebase':'');
		$scope.auth = $firebaseAuth();

		$scope.logar = function(user) {
			$scope.auth.$signInWithEmailAndPassword(
				user.email, 
				user.senha
			).then(function(user){
				alert('logou como :', user.uid);
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
			$scope.authObj.$createUserWithEmailAndPassword(
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
	})
	.controller('nav', function($scope, $firebaseAuth){
		$scope.auth = $firebaseAuth();
		$scope.logout = function(){
			$scope.auth.$signOut();
			window.location.reload();
		}
	})
	.controller('chat', function($scope, $firebaseAuth){
		$scope.auth = $firebaseAuth();

		$scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      $scope.user = firebaseUser;

	      $scope.teste = "olar";

	      if(!$scope.user) return;
	    });
	})
	.directive('appHeader', function(){
		return {
			restrict: 'AE',
			templateUrl: 'include/header.html'
		}
	})
	.directive('appNav', function(){
		return {
			restrict: 'AE',
			scope: true,
			templateUrl: 'include/nav.html',
			controller: 'nav'
		}
	})
	.directive('appFooter', function(){
		return {
			restrict: 'AE',
			templateUrl: 'include/footer.html'
		}
	})
	.directive('chat', function(){
		return {
			restrict: 'AE',
			scope: true,
			templateUrl: 'include/chat.html',
			controller: 'chat'
		}
	});

	