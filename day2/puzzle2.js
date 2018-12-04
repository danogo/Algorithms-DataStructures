// --- Day 2: Inventory Management System ---
// https://adventofcode.com/2018/day/2

const fs = require('fs');

const boxesString = fs.readFileSync('./puzzle2_input.txt', 'utf-8');
const boxesArray = boxesString.split('\n');

let double = 0;
let triple = 0;


boxesArray.forEach(str => {
  const letters = str.split('');
  const map = new Map();
  let hasDouble = false;
  let hasTriple = false;

  for (let i = 0; i < letters.length; i++) {
    if (map.has(letters[i])) {
      let currValue = map.get(letters[i]) 
      map.set(letters[i], currValue + 1);
    } else {
      map.set(letters[i], 1);
    }
  }

 for (let value of map.values()) {
    if (value === 2) {
      hasDouble = true;
    }
    if (value === 3) {
      hasTriple = true
    }
  }

  if (hasDouble) {
    double++;
  }
  if (hasTriple) {
    triple++;
  }
})

console.log('double: ', double);
console.log('triple: ', triple);

const checksum = double * triple;
console.log('checksum: ', checksum);

