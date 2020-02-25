// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let reversedString = '';
  // for (let i = 0; i < str.length; i++) {
  //   reversedString = str[i] + reversedString;
  // }

  // return str.split('').reverse().join('');
  
  let reversedString = '';
  for (let ch of str) {
    reversedString = ch + reversedString;
  }
  return reversedString;
  // turn string into array and use the reduce helper
  // return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
