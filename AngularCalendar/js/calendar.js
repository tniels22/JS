var app = angular.module('app', []);

app.controller('SetVariables', [function(){
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
  self.PreviousMonth = function() {
    if (self.Month > 1){
      return self.Month-1;
    }
    else return 12;
  }
  self.WeekDay = self.date.getDay();
  self.Year = self.date.getFullYear();
  self.DayOfMonth = self.date.getDate();
  self.NameOfMonth = self.months[self.Month].month;
  self.NameOfPreviousMonth = self.months[self.PreviousMonth()].month;
  self.NumOfDaysInMonth = self.months[self.Month].days;
  self.NumOfDaysInPreviousMonth = self.months[self.PreviousMonth()].days;
  self.DaysInMonth = [];
  self.WeeksInMonth= [
    { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0},
    { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0},
    { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0},
    { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0},
    { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0},
    { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0},
    { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0},
  ];

  self.getDaysInMonth = function(){
    var a=[];
    for(var i=1; i <= self.NumOfDaysInMonth; i++) {
      a.push(i);
    }
    return a;
  };

  //returns arrray with each day of Month
  self.FirstDayOfMonth = function(){
    var currentWeekDay = self.WeekDay;
    var currentDayOfMonth = self.DayOfMonth;
    for (var i =  currentDayOfMonth; i != 1; i--){
      if (currentWeekDay >= 1) {
        currentWeekDay--;
      } else{
        currentWeekDay = 6;
      }
    }
    return currentWeekDay;
  }

  self.SetWeeksInMonth = function() {
    var W = 1;
    var other = "week"+W;
    var currentDayOfWeek = self.FirstDayOfMonth();
    var previousMonth = self.NumOfDaysInPreviousMonth;
    //Set Previous Months Days
    for (var i = self.FirstDayOfMonth()-1; i >= 0; i--) {
      self.WeeksInMonth[i].week1= previousMonth;
      previousMonth--;
    }
    //Set This Months Days
    for (var i=1; i<=self.NumOfDaysInMonth; i++){
      if (W == 1){
          self.WeeksInMonth[currentDayOfWeek].week1=i;
      }
      else if (W == 2){
          self.WeeksInMonth[currentDayOfWeek].week2=i;
      }
      else if (W == 3){
          self.WeeksInMonth[currentDayOfWeek].week3=i;
      }
      else if (W == 4){
          self.WeeksInMonth[currentDayOfWeek].week4=i;
      }
      else if (W == 5){
          self.WeeksInMonth[currentDayOfWeek].week5=i;
      }
      if(currentDayOfWeek < 6){
        currentDayOfWeek++;
      } else{
        currentDayOfWeek=0;
        W++;
      }
    }
    //Set Next Months Days
    var nextMonthCurrDay=1;
    while (currentDayOfWeek < 6){
      self.WeeksInMonth[currentDayOfWeek].week5=nextMonthCurrDay;
      nextMonthCurrDay++;
      currentDayOfWeek++;
    if (currentDayOfWeek == 6){
      if (  self.WeeksInMonth[currentDayOfWeek].week5 == 0){
      self.WeeksInMonth[currentDayOfWeek].week5=nextMonthCurrDay;
        }
      }
    }
  }

}]);

app.controller('goodCtrl', function(self) {
  var goodFeelings = ["Ready", "Awesome","Inner Peace"];
  self.good = goodFeelings[Math.floor((Math.random() * 3))];
});

/* MY RANDOM NOTES
app.controller('createCalendar', function(){
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
