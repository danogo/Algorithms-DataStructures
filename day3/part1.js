// --- Day 3: No Matter How You Slice It ---
// https://adventofcode.com/2018/day/3

const fs = require('fs');
const { performance } = require('perf_hooks');

const getInputFromTxt = path => {
  const string = fs.readFileSync(path, 'utf-8');
  return string;
}

const convertInputToArr = input => {
  return input.split('\r\n');
}

const inputString = getInputFromTxt('./input.txt');
const inputStrings = convertInputToArr(inputString);

// Solution 1
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
  let ms = performance.now();
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
  ms = performance.now() - ms;
  console.log(`time: ${(ms/1000).toFixed(3)} seconds`);
  return overlapsCount;
};

console.log('=== Solution 1, using Array.includes() ===');
console.log('answer: ', countOverlaps(inputStrings));

// Solution 2
const mapInputStringsToBoxes = strings => {
  return strings.map(string => {
    const boxData = string.replace(/\D/g, ' ').split(' ');
    return {
      x: parseInt(boxData[4], 10),
      y: parseInt(boxData[5], 10),
      w: parseInt(boxData[7], 10),
      h: parseInt(boxData[8], 10)
    }
  })
}

const countOverlaps2 = inputStrings => {
  let ms = performance.now();
  const boxes = mapInputStringsToBoxes(inputStrings);
  const usedInches = new Map();
  let overlapsCount = 0;

  for (let k = 0; k < boxes.length; k++) {
    for (let i = 0; i < boxes[k].h; i++) {
      for (let j = 1; j <= boxes[k].w; j++) {
        const inch = ((boxes[k].y + i) * 1000) + boxes[k].x + j;
        if (usedInches.has(inch)) {
          usedInches.set(inch, usedInches.get(inch) + 1);
        } else {
          usedInches.set(inch, 1);
        }
      }
    }
  }
  for (let value of usedInches.values()) {
    if (value > 1) {
      overlapsCount++;
    }
  }
  ms = performance.now() - ms;
  console.log(`time: ${(ms/1000).toFixed(3)} seconds`);
  return overlapsCount;
};

console.log('=== Solution 2, using Map.has() ===');
console.log('answer: ', countOverlaps2(inputStrings));