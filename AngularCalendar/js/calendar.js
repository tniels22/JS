var testapp = angular.module('app', []);

testapp.controller('SetVariables', [function(){
  //initialized / construction
  var self = this;
  self.months = [
    {month:"January", days: 31},
    {month: "February", days: 28},
    {month: "March", days: 31},
    {month: "April", days: 30},
    {month: "May", days: 31},
    {month: "June", days: 30},
    {month: "July", days: 31},
    {month: "August", days: 31},
    {month: "September", days: 30},
    {month: "October", days: 31},
    {month: "November", days: 30},
    {month: "December", days: 31}
   ];

  self.weekdays = [
    {day: "Sunday"},
    {day: "Monday"},
    {day: "Tuesday"},
    {day: "Wednesday"},
    {day: "Thursday"},
    {day: "Friday"},
    {day: "Saturday"}
  ];

  self.date = new Date;

  // Use these in a service....
  self.Month = self.date.getMonth();
  self.WeekDay = self.date.getDay();
  self.Year = self.date.getFullYear();
  self.DayOfMonth = self.date.getDate();
  self.NameOfMonth = self.months[self.Month].month;
  self.NumOfDaysInMonth = self.months[self.Month].days;
  self.DaysInMonth = [];
  self.WeeksInMonth = 4;
  self.SetWeeksInMonth = function(){
    currentWeekDay = self.WeekDay;
    currentDayOfMonth = self.DayOfMonth;
    //find WeekDay of 1st Day of Month
    //Store for reference later to autofill blank days & set to not-clickable
    var weeks = 0;
    var firstWeekDay = 0;
    if (firstWeekDay != 0){
      weeks++;
    }
    for(i = 0; i < NumOfDaysInMonth; i++) {
      if (WeekDay == 0) {
        weeks++;
      }
    }
    return weeks;
  }

  //returns arrray with each day of Month
  self.SetDaysInMonth = function(){
    var a=[];
    for(var i=0; i < self.DaysInMonth[self.Month]; i++) {
      i++;
      self.DaysInMonth.push(i);
    }
  }
}]);
testapp.controller('goodCtrl', function(self) {
  var goodFeelings = ["Ready", "Awesome","Inner Peace"];
  self.good = goodFeelings[Math.floor((Math.random() * 3))];
});

/* MY RANDOM NOTES
testapp.controller('createCalendar', function(){
  self.GetDaysInMonth.foreach{
    angular.element(document.querySelector('#Calendar'));
  };
});
Imports angular
Calendarapp.js
Calendarcontroller.js
Eventscontroller.js

Eventservice.js

Use ng-class to evaluate whats in the controller to determine if month is gray or black
Julian numbers are easier…
Javascript splice function

SetMonth(0 based)
Day of Month is (1 based)
Track by $index


*/
//Use Table
