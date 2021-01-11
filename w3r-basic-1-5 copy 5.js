// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
// Question:
// Input:
// Output:
// Solution: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-5.php

// Ideas:
/*
 */

// Steps:
/*
 */

// Notes:
/*
1. windows.setInterval() take a function & returns a timevalue of how often the function will be executed.
   Ref: https://www.w3schools.com/jsref/met_win_setinterval.asp
 */

// Code:
function animate_string(id) {
  const element = document.getElementById(id);
  const textNode = element.childNodes[0]; // assuming no other children
  let text = textNode.data;

  timeValue = setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}

let timeValue = null;
function halt_animate_string() {
  clearInterval(timeValue);
  document.getElementById("target").innerHTML = "w3resource ";
}
//  Testing:
/*
 */
