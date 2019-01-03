// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
s = 'abacb';
n = 23;


const repeatedString = (s, n) => {
  const getNumOfA = string => string.split('').filter(letter => letter === 'a').length;

  let numOfA = getNumOfA(s);

  if (n % s.length === 0) {
    return (n / s.length) * numOfA;
  } else {
    let rest = n % s.length;
    return (((n - rest) / s.length) * numOfA) + getNumOfA(s.substring(0, rest));
  }
}

console.log(repeatedString(s, n));

 // doesnt work, fatal error, process out of memory
function repeatedStringBAAAAAAAAD(s, n) {
  let repString = '';
  // building string if n is too large takes too much memory
  while (repString.length < n) {
     repString += s;
  }
 
   repString = repString.substring(0, n);
 
   const repStringLetters = repString.split('');
 
   const aLetters = repStringLetters.filter(letter => letter === 'a');
   return aLetters.length;
 
 }