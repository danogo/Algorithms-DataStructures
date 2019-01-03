const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim();
let letters = new Set();
let shortestPolymer;

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
  // console.log('from polymer: ', input.join('').length)
  return input.join('').length;
}

for (let i = 0; i < input.length; i++) {
  if (input.charAt(i) === input.charAt(i).toUpperCase()) continue;
  if (letters.has(input.charAt(i))) continue;
  letters.add(input.charAt(i));
}

letters = Array.from(letters);

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  const pattern = `${letter}|${letter.toUpperCase()}`;
  const re = new RegExp(pattern, 'g');
  const inputWithoutLetter = input.replace(re, '').split('');
  const length = finalPolymer(inputWithoutLetter);
  if (i === 0) {
    shortestPolymer = length;
  } else {
    if (length < shortestPolymer) {
      shortestPolymer = length;
    }
  }
}


console.log(shortestPolymer);