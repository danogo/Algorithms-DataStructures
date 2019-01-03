// https://www.hackerrank.com/challenges/30-operators/problem

function solve(meal_cost, tip_percent, tax_percent) {
  const tip = meal_cost * (tip_percent/100);
  const tax = meal_cost * (tax_percent/100);

  console.log((meal_cost + tip + tax).toFixed(0));
}

solve(12.00, 20, 8);