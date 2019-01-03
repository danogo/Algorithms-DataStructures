// function that converts given integer to binary and returns maximum number of consecutive 1's
const maxOneInBinary = n => {
  const binaryNumStr = n.toString(2);

  const binaryDigits = binaryNumStr.split('');
  let record = 0;
  binaryDigits.reduce((acc, curr) => {
    if (curr === '1') {
      acc++
    } else if ( curr === '0') {
      acc = 0;
    }
    record = acc > record ? acc : record;
    return acc;
  }, 0);
  return record;
};

console.log(maxOneInBinary(38));