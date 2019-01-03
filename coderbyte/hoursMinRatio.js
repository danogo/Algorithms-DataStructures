// Challenge
// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

// Sample Test Cases
// Input:126
// Output:"2:6"

// Input:45
// Output:"0:45"

function timeConvert(num) { 
  if (num >= 60) {
    const minutes = num % 60;
    const hours = (num - minutes) / 60;
    return `${hours}:${minutes}`;
  } else {
    return `0:${num}`;
  }        
}

console.log(timeConvert(60));