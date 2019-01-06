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

const findLargestFinite = inputArr => {
  const size = findAreaSize(inputArr);
  const areas = new Map();
  
  for (let y = size.minY; y <= size.maxY; y++) {
    for (let x = size.minX; x <= size.maxX; x++) {
      let area = 0; 
      let double = false;
      let distance = Math.abs((inputArr[0].x - x)) + Math.abs((inputArr[0].y - y));
      for (let i = 1; i < inputArr.length; i++) {
        const currentDistance = Math.abs((inputArr[i].x - x)) + Math.abs((inputArr[i].y - y));
        if (currentDistance < distance) {
          distance = currentDistance;
          area = i; 
          double = false;
        } else if (currentDistance === distance) {
          double = true;
        }
      }  

      if (y === size.minY || y === size.maxY || x === size.minX || x === size.maxX) {
        areas.set(area, false);
        continue;
      } 

      if (double) {
        continue;
      }

      if (areas.has(area) && !areas.get(area)) {
        continue
      } else if (areas.has(area)) {
        areas.set(area, areas.get(area) + 1);
      } else {
        areas.set(area, 1);
      }
    }
  }

  let maxSize = 0;
  for (let value of areas.values()) {
    if (typeof value === 'number' && value > maxSize) {
      maxSize = value;
    }
  }
  
  return maxSize;
}


console.log(findLargestFinite(inputObjs));