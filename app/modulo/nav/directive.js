angular.module(APP)
	.directive('appNav', function(){
		return {
			restrict: 'AE',
			scope: true,
			templateUrl: 'app/modulo/nav/template.html',
			controller: 'nav'
		}
	});