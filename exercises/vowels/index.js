// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  let vows = 0;

  let theVowels = ['a', 'e', 'i', 'o', 'u'];

  for (let ch of str.toLowerCase()) {
    if (theVowels.includes(ch)) {
      vows += 1;
    }
  }

  return vows;
}

module.exports = vowels;
