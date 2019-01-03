// --- Part Two ---
// Correct boxes will have IDs which differ by exactly one character at the same position in both strings. What letters are common between the two correct box IDs?

const fs = require('fs');
const ids = fs.readFileSync('./puzzle2_input.txt', 'utf-8').split('\n');
const { performance } = require('perf_hooks');

// Solution 1
const commonLetters = ids => {
  let ms = performance.now();
  let commonLetters;
  ids.forEach((id, index) => {
    for (let i = index + 1; i < ids.length; i++) {
      const diffs = compareLetters(id, ids[i]);
      if (diffs.diffs === 1) {
        commonLetters = id.substring(0, diffs.diffIndex) + id.substring(diffs.diffIndex + 1);
      }
    }
  });
  ms = performance.now() - ms;
  console.log('time daniel: ', ms);
  return commonLetters;
}

const compareLetters = (str1, str2) => {
  let diffs = 0;
  let diffIndex;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      diffs++;
      diffIndex = i;
    }
  }
  return {diffs, diffIndex};
};

console.log(commonLetters(ids));

// Solution 2
const fR = ids => {
  let ms = performance.now();
  const s = new Set();
  for (let i = 0; i < ids.length; i++) {
    for(let j = 0; j < ids[i].length; j++) {
      let curr = ids[i].substring(0, j) + '*' + ids[i].substring(j + 1);
      if (s.has(curr)) {
        ms = performance.now() - ms;
        console.log('time rogoz: ', ms);
        return curr.replace('*', '');
      } else {
        s.add(curr);
      }
    }
  }
}

console.log(fR(ids));