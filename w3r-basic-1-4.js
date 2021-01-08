// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// Question:
// Input:
// Output:
// Solution: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php

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
const side1 = 5;
const side2 = 6;
const side3 = 7;

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(`The area of the triangle is ${areaValue}`);

//  Testing:
/*
 */
