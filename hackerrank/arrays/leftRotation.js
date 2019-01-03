// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

arr = [1, 2, 3, 4, 5];

function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let firstEl = a.shift();
    a.push(firstEl);
  }

  return a;
}

console.log(rotLeft(arr, 3));