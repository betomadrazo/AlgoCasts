// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let frequencies = {};
    let max = 0;
    let key = '';
    for (let ch of str) {
      frequencies[ch] = frequencies[ch] + 1 || 1;
      if (frequencies[ch] > max) {
        max = frequencies[ch];
        key = ch;
      }
    }
    return key;
}

module.exports = maxChar;
