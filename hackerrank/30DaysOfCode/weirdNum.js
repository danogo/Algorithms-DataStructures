// https://www.hackerrank.com/challenges/30-conditional-statements/problem

function isNumWierd(n) {
  if (n % 2 !== 0 || (n >=6 && n <=20)) {
    console.log('Weird');
  } else {
    console.log('Not Weird');
  }
}