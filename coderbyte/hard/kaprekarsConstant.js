function kaprekarsConstant(num) { 
 
  let routineCount = 0;
  let targetNum = num;

  const getDifference = num => {
    num = num.toString()
    if (num.length < 4) {
      for (let i = 4 - num.length; i > 0; i--) {
        num = '0' + num;
      }
    }
    const numArr = [...num].sort();
    const numAsc = parseInt(numArr.join(''), 10);
    const numDesc = parseInt(numArr.reverse().join(''));
    return numDesc - numAsc;
  } 

  while (targetNum !== 6174) {
   targetNum = getDifference(targetNum);
   console.log(targetNum);
   routineCount++;
  }
  return routineCount;
  
}


console.log(kaprekarsConstant(9831));
   