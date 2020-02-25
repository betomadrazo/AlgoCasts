// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) { // 48-57; 97, 122
  return removeSpecialChars(stringA) === removeSpecialChars(stringB);
}

function removeSpecialChars(string) {
  return string.toLowerCase().replace(' ', '').split('').filter(ch => { 
    return ch.charCodeAt(0) > 96 && ch.charCodeAt(0) < 123;
  }).sort().join(''); 
}

module.exports = anagrams;
