const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim();
const inputArr = input.split('');

const finalPolymer = input => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      if (input[i + 1] === input[i].toUpperCase()) {
        input.splice(i, 2);
        if (i === 0) {
          i = i - 1
        } else {
          i = i - 2;
        }
      } 
    } else {
      if (input[i + 1] === input[i].toLowerCase()) {
        input.splice(i, 2);
        if (i === 0) {
          i = i - 1
        } else {
          i = i - 2;
        }
      }
    }
  }

  return input.join('').length;
}

console.log(finalPolymer(inputArr));