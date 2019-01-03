// https://coderbyte.com/editor/Chessboard%20Traveling:JavaScript

function chessboardTraveling(str) { 
  const startX = parseInt(str.charAt(1));
  const startY = parseInt(str.charAt(3));
  const targetX = parseInt(str.charAt(6));
  const targetY = parseInt(str.charAt(8));
  movesRight = targetX - startX;
  movesUp = targetY - startY;

  // variation with repetition n! / n1! * n2! * ... nk!

  const factorial = num => {
    if (num > 1) {
      return num * factorial(num - 1)
    } else {
      return 1;
    }
  }

  return factorial(movesRight + movesUp) / (factorial(movesRight) * factorial(movesUp));
}

console.log(chessboardTraveling('(1 1)(3 3)'));
