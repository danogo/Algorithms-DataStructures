function processData(input) {
  //Enter your code here
  const words = input.split(' ');
  words.forEach(word => {
    const letters = word.split('');
    const evenLetters = letters.filter((el, i) => i % 2 === 0).join('');
    const oddLetters = letters.filter((el, i) => i % 2 !== 0).join('');
    console.log(`${evenLetters} ${oddLetters}`)
  })
} 

processData('Hacker Rank');