const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

const convertInputToMap = input => {
  const steps = new Map();
  const regex = /\s[A-Z]{1}\s/g;

  for (let i = 0; i < input.length; i++) {
    const letters = input[i].match(regex);
    const l1 = letters[0].trim();
    const l2 = letters[1].trim();
    
    if (!steps.has(l1)) {
      steps.set(l1, []);
    }

    if (steps.has(l2)) {
      steps.set(l2, [...steps.get(l2), l1])
    } else {
      steps.set(l2, [l1]);
    }
  }
  
  return steps;
}


const arrangeSteps = input => {
  const steps = convertInputToMap(input);
  let available = findFirstAvailable(steps);
  let current = available.shift(); 
  steps.delete(current);
  const order = new Set(current);
  let result = '';

  while (steps.size > 0) {
    available = [];
    
    for (let [key, value] of steps.entries()) {
      let isAvailable = true;

      if (value.length === 0) {
        available.push(key);
        continue;
      }
      
      for (let i = 0; i < value.length; i++) {
        if (!order.has(value[i])) {
          isAvailable = false;
        } 
      }

      if (isAvailable) { 
        available.push(key);
      }
    }

    available.sort((a, b) => a.localeCompare(b));
    const nextStep = available.shift();
    order.add(nextStep);
    steps.delete(nextStep);
  };

  for (let value of order.values()) {
    result += value;
  }

  return result;
}


const findFirstAvailable = steps => {
  const available = [];

  for (let [key, value] of steps) {
    if (value.length === 0) {
      available.push(key);
    }
  }

  available.sort((a, b) => a.localeCompare(b));
  return available;
}




console.log(arrangeSteps(input));