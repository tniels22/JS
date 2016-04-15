var testapp = angular.module('testapp', []);

testapp.controller('SetVariables', function(){
  //initialized / construction
  var months=["January", "February", "March", "April", "May", "June", "July", "August", "July", "September", "October", "November", "December" ];
  var DaysInMonth=[31, 28, 31, 30, 31, 31, 30, 31, 30, 31]
  var self = this;
  self.date = new Date;
  self.Month = self.date.getMonth();
  self.WeekDay = self.date.getDay();
  self.Year = self.date.getFullYear();
  self.DayOfMonth = self.date.getDate();
  // create functions
  self.NameOfMonth = months[self.Month];
  self.GetDaysInMonth = DaysInMonth[self.Month];
  self.GetDaysInPrevMonth = DaysInMonth[self.Month-1];
  self.GetDaysInNextMonth = DaysInMonth[self.Month+1];
});
/*
testapp.controller('createCalendar', function(){
  self.GetDaysInMonth.foreach{
    angular.element(document.querySelector('#Calendar'));
  };
});
*/
//Use Table
testapp.controller('goodCtrl', function(self) {
  var goodFeelings = ["Ready", "Awesome","Inner Peace"];
  self.good = goodFeelings[Math.floor((Math.random() * 3))];
});
