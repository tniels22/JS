var testapp = angular.module('testapp', []);

testapp.controller('ctrl1', function($scope){
  $scope.months=["January", "February", "March", "April", "May", "June", "July", "August", "July", "September", "October", "November", "December" ];
  $scope.weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  $scope.date = new Date;
  $scope.Month = $scope.date.getMonth();
  $scope.WeekDay = $scope.date.getDay();
  $scope.Year = $scope.date.getFullYear();
  $scope.DayOfMonth = $scope.date.getDate();
  $scope.CurrMonth = $scope.months[$scope.Month];
});

testapp.controller('goodCtrl', function($scope) {
  var goodFeelings = ["Ready", "Awesome","Inner Peace"];
  $scope.good = goodFeelings[Math.floor((Math.random() * 3))];

});
