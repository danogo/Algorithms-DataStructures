// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  
  const s1Arr = [...s1];
  const commonSub = s1Arr.find(el => s2.includes(el));

  return commonSub === undefined ? 'NO' : 'YES';
}

twoStrings('bva', 'zcd');

