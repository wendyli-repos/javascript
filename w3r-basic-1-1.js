// 1. Write a JavaScript program to display the current day and time in the following format.
// Question:
// Input:
// Output: Today is : Tuesday.
//         Current time is : 10 PM : 30 : 38
//         Also need to include "Noon" & "Midnight"
// Solution: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php

// Ideas:
/*
 */

// Steps:
/*
 */

// Notes:
/*
 */

// Code:
var now = new Date();
day = now.getDay();
days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
hours = now.getHours();
hour = hours >= 12 ? hours - 12 : hours;
prepand = hours >= 12 ? " PM" : " AM";
mins = now.getMinutes();
secs = now.getSeconds();
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
console.log("Today is : " + days[day]);
console.log(`Current time is ${hour} ${prepand} : ${mins} : ${secs}`);

//  Testing:
/*
 */
