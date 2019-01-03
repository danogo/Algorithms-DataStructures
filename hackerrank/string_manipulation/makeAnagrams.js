// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

const a = 'abcda';
const b = 'adgha';

function makeAnagram(a, b) {
  const arrA = a.split('');
  const arrB = b.split('');
  let pairs = 0;

  for (let letter of arrA) {
    const indexB = arrB.findIndex(el => el === letter);

    if (indexB !== -1) {
      arrB.splice(indexB, 1);
      pairs++;
    }
  }

  return (a.length - pairs) + (b.length - pairs);
}

console.log(makeAnagram(a, b));