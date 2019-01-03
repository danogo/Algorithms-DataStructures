/*
https://adventofcode.com/2015/day/1

=== PART 1 ===

Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.
To what floor do the instructions take Santa?
*/

const fs = require('fs');

const stepsString = fs.readFileSync('./day1_santahelper.txt', 'utf-8');
const stepsArray = stepsString.split('');

const findDestinationFloor = steps => {
  return steps.reduce((acc, step) => acc += step === '(' ? 1 : -1, 0);
};
let finalFloor = findDestinationFloor(stepsArray);
console.log('Destination floor is: ', finalFloor);

/*
=== PART 2 ===

Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

For example:

) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
What is the position of the character that causes Santa to first enter the basement?
*/


// Method 1 - slower, because checks whole array
const findBasementStep = steps => {
  console.time('slowStep');
  const stepsToBas = [];
  steps.reduce((acc, step, index) => {
    step === '(' ? ++acc : --acc;
    if (acc === -1) stepsToBas.push(index + 1);
    return acc;
  }, 0)
  console.timeEnd('slowStep');
  return stepsToBas[0];
};

let firstBasemenetStep = findBasementStep(stepsArray);
console.log('Number of a first step to the basement: ', firstBasemenetStep);


// Method 2 - faster, because stops at 1st coming to basement
const findBasStepFast = steps => {
  console.time('fastStep');
  let currentFloor = 0;
  for (let i = 0, l = steps.length; i < l; i++) {
    if (steps[i] === '(') {
      currentFloor++;
    } else if (steps[i] === ')') {
      currentFloor--;
    }
    if (currentFloor === -1) {
      console.timeEnd('fastStep')
      return ++i;
    }
  }
}

let fastBasStep = findBasStepFast(stepsArray);
console.log('Number of a first step to the basement: ', fastBasStep);