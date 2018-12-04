// --- Part Two ---
// https://adventofcode.com/2018/day/1#part2

const fs = require('fs');

const getFirstRepeatedFreq = () => {
  const frequencyChanges = fs.readFileSync('./puzzle1_input.txt', 'utf-8');
  const changesStrArr = frequencyChanges.split('\n');
  const changesNumArr = changesStrArr.map(str => parseInt(str, 10));

  // const changesNumArr = [+3, +3, +4, -2, -4];
  
  let currFreq = 0;
  const freqs = [0];

  for (let i = 0; ; i++) {
    currFreq += changesNumArr[i];
    
    if (freqs.includes(currFreq)) {
      return `${currFreq} is duplicate`;
    }

    freqs.push(currFreq);

    if (i === changesNumArr.length - 1) {
      i = -1;
    }
  }

};

console.log(getFirstRepeatedFreq());