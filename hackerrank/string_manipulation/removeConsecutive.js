// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

const consecutiveString = 'AABBABAAA';

// ====== Slow solution ============
// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let ms = performance.now();
  const letters = s.split('');
  let deletions = 0;

  for (let i = 1; i < letters.length; i++ ) {
    if (letters[i] === letters[i-1]) {
      letters.splice(i, 1);
      deletions++;
      i--;
    }
  }
  ms = performance.now() - ms;
  console.log(ms);
  return deletions;
}

// console.log(alternatingCharacters(consecutiveString));

// ========== Fast solution =============
function removeConsecutives(s) {
  const newS = s.replace(/(\w)\1+/g, '$1');
  const deletions = s.length = newS.length;
  return deletions;
}

removeConsecutives(consecutiveString);