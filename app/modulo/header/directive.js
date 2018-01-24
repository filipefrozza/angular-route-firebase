angular.module(APP)
	.directive('appHeader', function(){
		return {
			restrict: 'AE',
			templateUrl: 'app/modulo/header/template.html'
		}
	});