// --- Part Two ---
// https://adventofcode.com/2018/day/1#part2

const fs = require('fs');
const { performance } = require('perf_hooks');

const getFirstRepeatedFreq = () => {
  const frequencyChanges = fs.readFileSync('./puzzle1_input.txt', 'utf8');
  const changesStrArr = frequencyChanges.split('\n');
  const changesNumArr = changesStrArr.map(str => parseInt(str, 10));

  // const changesNumArr = [+3, +3, +4, -2, -4];
  let ms = performance.now();
  let currFreq = 0;
  const freqs = [0];

  for (let i = 0; ; i++) {
    currFreq += changesNumArr[i];
    
    if (freqs.includes(currFreq)) {
      ms = performance.now() - ms;
      console.log(`Time for solution with Array.includes(): ${(ms/1000).toFixed(3)} seconds`);
      return `${currFreq} is duplicate`;
    }

    freqs.push(currFreq);

    if (i === changesNumArr.length - 1) {
      i = -1;
    }
  }
  
};

console.log(getFirstRepeatedFreq());

// Solution 2
const getFirstRepeatedFreq2 = () => {
 
  const frequencyChanges = fs.readFileSync('./puzzle1_input.txt', 'utf8');
  const changesStrArr = frequencyChanges.split('\n');
  const changesNumArr = changesStrArr.map(str => parseInt(str, 10));

  // const changesNumArr = [+3, +3, +4, -2, -4];
  let ms = performance.now();
  let currFreq = 0;
  const freqSet = new Set();

  for (let i = 0; ; i++) {
    currFreq += changesNumArr[i];
    
    if (freqSet.has(currFreq)) {
      ms = performance.now() - ms;
      console.log(`Time for solution with Set.has(): ${(ms/1000).toFixed(3)} seconds`);
      return `${currFreq} is duplicate`;
    }

    freqSet.add(currFreq);

    if (i === changesNumArr.length - 1) {
      i = -1;
    }
  }
  
};

console.log(getFirstRepeatedFreq2());