// --- Day 2: Inventory Management System ---
// https://adventofcode.com/2018/day/2

const fs = require('fs');
const { performance } = require('perf_hooks');

const boxesString = fs.readFileSync('./input_rogoz.txt', 'utf-8');
const boxesArray = boxesString.split('\n');
const boxesRogoz = fs.readFileSync('./input_rogoz.txt', 'utf8');
const inputRogoz = boxesRogoz.split('');

const findChecksum = inputArr => {
  let ms = performance.now();
  let double = 0;
  let triple = 0;

  inputArr.forEach(str => {
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
  });

  // console.log('double: ', double);
  // console.log('triple: ', triple);
  // console.log('checksum: ', checksum);
  ms = performance.now() - ms;
  console.log(`time: ${ms} milliseconds`);
  return double * triple;
};


console.log('answer: ', findChecksum(boxesArray));


// Solution rogoziowe
const findChecksum2 = input => {
  let ms = performance.now();
  const sum = {'t2': 0, 't3': 0, '2': 0, '3': 0}
  let tmp = {}

  for (let i = 0; i < input.length; i++) {
    let c = input[i]
    if (c !== '\n') {
      if (!tmp[c]) tmp[c] = 0
      tmp[c]++;
      if (tmp[c] > 3) { sum['t3']--;}
      else if (tmp[c] === 3) { sum['t3']++; sum['t2']--; }
      else if (tmp[c] === 2) { sum['t2']++; }
    }
    else {
      if (sum['t3']) { sum['t3'] = 0; sum['3']++; }
      if (sum['t2']) { sum['t2'] = 0; sum['2']++; }
      tmp = {}
    }
  }

  ms = performance.now() - ms;
  console.log(`time: ${ms} milliseconds`);
  return sum['2']*sum['3'];
}

console.log('answer: ', findChecksum2(inputRogoz));
