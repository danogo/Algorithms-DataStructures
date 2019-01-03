// MEDIUM DIFFICULTY
// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// first try: checking positions
// second try: checking how many numbers are less than, to the end of array (i++)
// third best try: checking how many numbers are greater than to the original position -2 (i--)

const que = [2, 1, 5, 3, 4]; // 3

const que2 = [5, 1, 2, 3, 7, 8, 6, 4]; // Too chaotic

const que3 = [1, 2, 5, 3, 7, 8, 6, 4]; // 7   

const que4 = [1, 2, 5, 3, 4, 7, 8, 6] // 4

// Works but take to much time
function minimumBribes(q) {
  let bribes = 0;

  for (let i = q.length; i >= 0; i--) {
    // check if bribed more than 2 persons
    if (q[i] - i > 3) return console.log('Too chaotic');
    // check how many numbers between origin and current position are greater than our number, 
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }

  return console.log(bribes);
}

minimumBribes(que);
minimumBribes(que2);
minimumBribes(que3);
minimumBribes(que4);