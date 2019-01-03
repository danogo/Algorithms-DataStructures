// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

const clouds = [0, 1, 0 , 0, 0, 1, 0];

function jumpingOnClouds(clouds) {
  let jumps = 0;
  for (let i = 0; i < clouds.length; i++) {
    console.log(i);
    if (clouds[i+2] === 0) {
      i++;
    }

    jumps++;
  }
  return jumps - 1;
}

console.log(jumpingOnClouds(clouds));