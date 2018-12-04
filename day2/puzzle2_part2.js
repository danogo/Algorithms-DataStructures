// --- Part Two ---
// Correct boxes will have IDs which differ by exactly one character at the same position in both strings. What letters are common between the two correct box IDs?

const fs = require('fs');

const commonLetters = () => {
  const ids = fs.readFileSync('./puzzle2_input.txt', 'utf-8').split('\n');
  let commonLetters;
  ids.forEach((id, index) => {
    for (let i = index + 1; i < ids.length; i++) {
      const diffs = compareLetters(id, ids[i]);
      if (diffs.diffs === 1) {
        commonLetters = id.substring(0, diffs.diffIndex) + id.substring(diffs.diffIndex + 1);
      }
    }
  });
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

console.log(commonLetters());