// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

const prices = [1, 1, 6, 1];

// Complete the maximumToys function below.
function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  let sum = 0;
  let maxToysNum = 0;
  for (let i = 0; i < prices.length; i++) {
    if (sum + prices[i] < k) {
      sum += prices[i];
      maxToysNum++;
    } else {
      return maxToysNum;
    }
  }

  return maxToysNum;
}

console.log('Maximum number of toys: ', maximumToys(prices, 7));