function LongestWord(sen) { 

  sen = sen.replace(/\W/g, ' ').trim();
  sen = sen.split(' ');
  
  let longestWord = '';
  
  sen.forEach(word => {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  })
  
  return longestWord;
         
}