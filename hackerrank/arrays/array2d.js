// https://www.hackerrank.com/challenges/2,d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

glasses = [
  [1, 1, 1, 0, 0, 0,],
  [0, 1, 0, 0, 0, 0,],
  [1, 1, 1, 0, 0, 0,],
  [0, 0, 2, 4, 4, 0,],
  [0, 0, 0, 2, 0, 0,],
  [0, 0, 1, 2, 4, 0,]
];

glasses2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
]

function hourglassSum(arr) {
  let biggestSum = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
  for (let i = 0; i < 4; i ++) {
    for (let j = 0; j < 4; j++) {
        let currentSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        if (currentSum > biggestSum) {
          biggestSum = currentSum;
        }
    }
  }
  return biggestSum;
}

console.log(hourglassSum(glasses));