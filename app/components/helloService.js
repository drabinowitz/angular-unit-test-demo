angular.module('HelloModule', []).
	
	factory('uppercaseService', function(){

		return function(input) {

			return input.toUpperCase();

		}

	}).

	factory('helloService', ['uppercaseService',function(uppercaseService) {
		
		return function(){

			return uppercaseService('hello');

		}

	}]);