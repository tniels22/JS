var testapp = angular.module('testapp', []);

testapp.controller('ctrl1', function($scope){
  $scope.date = new Date;
  $scope.Month = $scope.date.getMonth();
  $scope.Day = $scope.date.getDay();
});

testapp.controller('badCtrl', function($scope) {
  var badFeelings = ["Disregarded", "Unimportant","Rejected","Powerless"];
  $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});
