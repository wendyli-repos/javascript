// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
// Question:
// Input:
// Output:
// Solution: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-7.php

// Ideas:
/*
1. new Date()
2. *.getDay()
 */

// Steps:
/*
 */

// Notes:
/*
 */

// Code:
function checkSunday() {
  for (let year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
      console.log(`Year ${year}'s 1st January is being a Sunday`);
    }
  }
}

checkSunday();

//  Testing:
/*
 */
