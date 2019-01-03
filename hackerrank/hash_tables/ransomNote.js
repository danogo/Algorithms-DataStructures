// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

  const hasAllWords = note.every(word => {
    if (magazine.includes(word)) {
      magazine.splice(magazine.indexOf(word), 1);
      return true;
    }
    return false;
  });

  console.log(hasAllWords ? 'Yes' : 'No');
}