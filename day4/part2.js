const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const inputSorted = input.sort((a, b) => {
    return a.localeCompare(b);
})
// console.log(inputSorted);

const asleepMostSameMinute = shifts => {
  const guards = new Map();
  let currentGuard;
  let up;
  let asleep;

  for (let i = 0; i < shifts.length; i++) {
    const current = shifts[i];
    const isNewShift = current.match(/#\d*/);
    if (isNewShift) {
      currentGuard = isNewShift[0].replace('#', '');
      if (!guards.has(currentGuard)) {
        guards.set(currentGuard, new Map());
      }
      continue;
    }

    if (/asleep/.test(current)) {
      asleep = parseInt(current.match(/:\d*/)[0].replace(':', ''), 10);
    }

    if (/up/.test(current)) {
      up = parseInt(current.match(/:\d*/)[0].replace(':', ''), 10);
      let guard = guards.get(currentGuard);
      for (let i = asleep; i < up; i++) {
        if (guard.has(i)) {
          guard.set(i, guard.get(i) + 1);
        } else {
          guard.set(i, 1);
        }
      }
      guards.set(currentGuard, guard);
    }
  }

  let repsRecord = 0;
  let mostRepeatedMinute;
  let mostRepeatedGuard;

  for (let [key, guard] of guards) {
    for (let [minute, reps] of guard) {
      if ( reps > repsRecord ) {
        repsRecord = reps;
        mostRepeatedMinute = minute;
        mostRepeatedGuard = key;
      }
    }
  }

  return mostRepeatedMinute * mostRepeatedGuard;
  
};

console.log(asleepMostSameMinute(inputSorted));