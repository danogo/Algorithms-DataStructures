https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

path = 'UDDDUDUU';

function countingValleys(path) {
  const steps = path.split('');
  const stepsNumbers = steps.map(step => step === 'U' ? 1 : -1);
  let level = 0;
  let valleyEntries = 0;
  stepsNumbers.forEach(step => {
    if (level === 0 && step === -1) {
      valleyEntries++;
    }
    level += step;
  })
  return valleyEntries;
}

console.log(countingValleys(path));