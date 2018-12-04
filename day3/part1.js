// --- Day 3: No Matter How You Slice It ---
// https://adventofcode.com/2018/day/3

const fs = require('fs');

const getInputFromTxt = path => {
  const string = fs.readFileSync(path, 'utf-8');
  return string;
}

const convertInputToArr = input => {
  return input.split('\r\n');
}

const extractDataFromString = string => {
  const boxData = string.replace(/\D/g, ' ').split(' ');
  return {
    x: parseInt(boxData[4], 10),
    y: parseInt(boxData[5], 10),
    w: parseInt(boxData[7], 10),
    h: parseInt(boxData[8], 10)
  }
}

const countOverlaps = inputArr => {
  const usedInches = [];
  const overlapingInches = []
  let overlapsCount = 0;
  inputArr.forEach(str => {
    const box = extractDataFromString(str);

    for (let i = 0; i < box.h; i++) {
      for (let j = 1; j <= box.w; j++) {
        const inch = ((box.y + i) * 1000) + box.x + j
        if (!usedInches.includes(inch)) {
          usedInches.push(inch)
        } else if(!overlapingInches.includes(inch)) {
          overlapingInches.push(inch);
          overlapsCount++;
        }
      }
    }
  })
  return overlapsCount;
};




const inputString = getInputFromTxt('./input.txt');
const inputArr = convertInputToArr(inputString);
console.log(countOverlaps(inputArr));



