// 3. Write a JavaScript program to get the current date.
// Question:
// Input:
// Output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Solution: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

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
month = now.getMonth();
mm = "0" + month + 1;
dd = "0" + now.getDate();
yy = now.getFullYear();

console.log(`Today is ${mm.slice(-2)}-${dd.slice(-2)}-${yy}`);
console.log(`Today is ${mm.slice(-2)}/${dd.slice(-2)}/${yy}`);
console.log(`Today is ${dd.slice(-2)}-${mm.slice(-2)}-${yy}`);
console.log(`Today is ${dd.slice(-2)}/${mm.slice(-2)}/${yy}`);

//  Testing:
/*
 */
