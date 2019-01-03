// --- Day 1: Chronal Calibration ---
// https://adventofcode.com/2018/day/1
const fs = require('fs');

const getFrequencyAfterChanges = () => {
  const frequencyChanges = fs.readFileSync('./puzzle1_input.txt', 'utf-8');
  const changesStrArr = frequencyChanges.split('\n');
  const changesNumArr = changesStrArr.map(str => parseInt(str, 10));
  const resultingFrequency = changesNumArr.reduce((acc, curr) => acc + curr);
  return resultingFrequency;
};

console.log(getFrequencyAfterChanges());

