// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(ar = [4, 5, 4, 3, 1, 3, 1, 4]) {
  const pairs = [];
  
  for (let i = 0; i < ar.length; i++) {
    console.log('first loop', ar)
    for (let j = i+1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        console.log(ar);
        console.log('i:',i);
        console.log('j:',j);
        pairs.push(ar[i]);
        pairs.push(ar[j]);
        ar.splice(i, 1);
        ar.splice(j-1, 1);
        console.log(ar);
        console.log(i);
        i--;
        break;
      }
    }
      
  }

  return pairs.length/2;
}

console.log(sockMerchant([1, 5, 4, 1, 5]));