// https://coderbyte.com/editor/Letter%20Changes:JavaScript

function letterChanges(str) { 

  const strArr = str.split('');
  const changedArr = strArr.map(char => {
    if (/[A-Za-z]/.test(char)) {
      if ( char === 'Z') {
        return 'A';
      } else if (char === 'z') {
        return 'a';
      } else {
        let charCode = char.charCodeAt(0);
        let nextStr = String.fromCharCode(charCode + 1);
        nextStr = /[aeoiu]/.test(nextStr) ? nextStr.toUpperCase() : nextStr;
        return nextStr;
      }
    } else {
      return char;
    }
  });

  const changedStr = changedArr.join('');
  return changedStr;
}

console.log(letterChanges('arcd!123'));

// Someone else's solution
function LetterChanges(str) {
	let alpha1 = "abcdefghijklmnopqrstuvwxyz";
	let alpha2 = "bcdEfghIjklmnOpqrstUvwxyzA";
	return str.split('').map((char, i) => alpha2[alpha1.indexOf(char)] || char).join('');
}