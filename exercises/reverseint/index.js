// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // if (n === 0) {
  //   return 0;
  // }
  // let arr = Math.abs(n).toString(10).split("").reverse();
  // let index = 0;
  // while (index < arr.length) {
  //   if (arr[index] !== "0") {
  //     break;
  //   }
  //   index++;
  // }
  // return parseInt(arr.slice(index).join("")) * Math.sign(n);
  return parseInt(n.toString(10).split("").reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
