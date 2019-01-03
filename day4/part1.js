const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const inputSorted = input.sort((a, b) => {
    return a.localeCompare(b);
})
// console.log(inputSorted);

const findSleepyGuard = shifts => {
  const guards = new Map();
  let currentGuard;
  let up;
  let asleep;
  let minutesAsleep = 0;
  let sleepestGuardKey = 0;
  let sleepestGuard;
  let minuteRecord = 0;
  let sleepestMinute;
  for (let i = 0; i < shifts.length; i++) {
    const current = shifts[i];
    const isNewShift = current.match(/#\d*/);
    if (isNewShift) {
      currentGuard = isNewShift[0].replace('#', '');
      if (!guards.has(currentGuard)) {
        guards.set(currentGuard, new Map([['mins', 0]]));
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
        guard.set('mins', guard.get('mins') + 1);
        if (guard.has(i)) {
          guard.set(i, guard.get(i) + 1);
        } else {
          guard.set(i, 1);
        }
      }
      guards.set(currentGuard, guard);
    }
  }

  for (let [key, value] of guards) {
    if (value.get('mins') > minutesAsleep) {
      minutesAsleep = value.get('mins');
      sleepestGuardKey = key;
    }
  }

  sleepestGuard = guards.get(sleepestGuardKey);
  sleepestGuard.delete('mins');
  for (let [key, value] of sleepestGuard) {
    if (value > minuteRecord) {
      minuteRecord = value;
      sleepestMinute = key;
    }
  };

  return sleepestGuardKey * sleepestMinute;
};

console.log(findSleepyGuard(inputSorted));

