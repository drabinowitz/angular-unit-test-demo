angular.module('RegisterModule', ['UsernameModule'])

.controller('RegisterCtrl', function(usernameAvailable, $scope) {

	$scope.personData;

	$scope.submit = function(data) {

		$scope.personData = data;

	};

})