// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
  const dataArray = input.split('\n').slice(1);

  const phoneBook = new Map();
  dataArray.forEach(el => {
    if (el.includes(' ')) {
      el = el.split(' ');
      phoneBook.set(el[0], el[1]);
    } else {
        phoneBook.has(el) 
      ? console.log(`${el}=${phoneBook.get(el)}`)
      : console.log('Not found');
    }
  });
} 

processData()