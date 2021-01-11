// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// Question:
// Input:
// Output:
// Solution: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php

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
function leapyear(id) {
  year = parseInt(document.getElementById(id).value);
  result = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  document.getElementById("BE6-result").value = result;
}

//  Testing:
/*
 */
