// --- Part Two ---
// https://adventofcode.com/2018/day/3#part2

const fs = require('fs');

const getInputFromTxt = path => {
  const string = fs.readFileSync(path, 'utf-8');
  return string;
}

const convertInputToArr = input => {
  return input.split('\r\n');
}


const inputString = getInputFromTxt('./input.txt');
const inputArr = convertInputToArr(inputString);

// Solution 1
const extractDataFromString = string => {
  const boxData = string.replace(/\D/g, ' ').split(' ');
  return {
    id: boxData[1],
    x: parseInt(boxData[4], 10),
    y: parseInt(boxData[5], 10),
    w: parseInt(boxData[7], 10),
    h: parseInt(boxData[8], 10)
  }
}

const getBoxInches = (box, fabricLength) => {
  const boxInches = [];
  for (let i = 0; i < box.h; i++) {
    for (let j = 1; j <= box.w; j++) {
      boxInches.push(((box.y + i) * fabricLength) + box.x + j);
    }
  }
  return boxInches;
}

const getBoxes = inputArr => {
  const boxes = inputArr.map(string => {
    const boxData = extractDataFromString(string);
    return {
      id: boxData.id,
      inches: getBoxInches(boxData, 1000)
    }
  })
  return boxes;
}

const findNonOverlapping = boxes => {
  for (let i = 0; i < boxes.length; i++) {
    let isOverlapping = false;
    for (let j = 0; j < boxes.length; j++) {
      if (i === j) continue;
      for(let k = 0; k < boxes[i].inches.length; k++ ) {
        if (boxes[j].inches.includes(boxes[i].inches[k])) {
          isOverlapping = true;
          break;
        }
      }
      if (isOverlapping) {
        break;
      };
    }
    if (!isOverlapping) {
      return boxes[i].id;
    }
  }
}

// const inputString = getInputFromTxt('./input.txt');
// const inputArr = convertInputToArr(inputString);
// const boxes = getBoxes(inputArr);
// console.log(findNonOverlapping(boxes));


// Solution 2
