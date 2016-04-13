var cal_app = angular.module('cal_app', []);

cal_app.controller('cal_controller', function($scope){
	$scope.curr_date = date.getFullYear();
});
