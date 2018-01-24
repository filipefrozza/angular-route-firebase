angular.module(APP)
	.directive('chat', function(){
		return {
			restrict: 'AE',
			scope: true,
			templateUrl: 'app/modulo/chat/template.html',
			controller: 'chat'
		}
	});