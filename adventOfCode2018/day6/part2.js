const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

const inputObjs = input.map(el => {
  const elArr = el.split(', ');
  return {
    x: parseInt(elArr[0], 10),
    y: parseInt(elArr[1], 10)
  }
})

const findAreaSize = input => {
  const inputX = input.map(el => el.x);
  const inputY = input.map(el => el.y);
  return { 
    minX: Math.min(...inputX),
    maxX: Math.max(...inputX),
    minY: Math.min(...inputY),
    maxY: Math.max(...inputY) 
  };
};

findRegionCloseToAll = inputArr => {
  const size = findAreaSize(inputArr);
  let sum = 0;
  
  for (let y = size.minY; y <= size.maxY; y++) {
    for (let x = size.minX; x <= size.maxX; x++) {
      let distanceSum = 0;
      for (let i = 0; i < inputArr.length; i++) {
        distanceSum += Math.abs((inputArr[i].x - x)) + Math.abs((inputArr[i].y - y));
      }
      if (distanceSum < 10000) {
        sum++;
      }
    }
  }

  return sum;
}

console.log(findRegionCloseToAll(inputObjs));