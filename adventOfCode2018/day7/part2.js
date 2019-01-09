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

const getTimesForSteps = (steps, delay) => {
  const times = new Map();
  const keys = Array.from([...steps.keys()])
  keys.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < keys.length; i++) {
    times.set(keys[i], delay + i + 1);
  }
  return times;
}

const getStepsTime = (input, workersMax, delay) => {
  const steps = convertInputToMap(input);
  const sSize = steps.size; 
  const times = getTimesForSteps(steps, delay);
  const order = new Set();
  let count = 0;
  const workers = new Map();
  
  while (order.size < sSize) {
    available = [];

    if (workers.size > 0) {
      for (let [key, value] of workers.entries()) {
        if (value === count) {
          order.add(key);
          workers.delete(key);
        }
      }
    }

    if (workers.size < workersMax) {
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
      for (let i = 0; i < available.length; i++) {
        if (workers.size === workersMax) break;
        workers.set(available[i], count + times.get(available[i]));
        steps.delete(available[i]);
      }
    }
    count++;
  };

  return count - 1;
}

console.log(getStepsTime(input, 5, 60));
