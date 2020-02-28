// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(steps) {
  pyArr = [];

  // 0 * 1, 1 * 3, 2 * 5, 3 * 7...
  let backStep = steps;
  let numberOfBricks = 1;
  for (let s = 0; s < steps; s++) {
    let stepString = '';
    for (let t = 1; t < backStep; t++) {
      stepString += ' ';
    }
    for (let b = 0; b < numberOfBricks; b++) {
      stepString += '#';
    }
    numberOfBricks += 2;
    for (let t = 1; t < backStep; t++) {
      stepString += ' ';
    }
    pyArr.push(stepString);
    backStep--;
  }
  for (let s of pyArr) {
    console.log(s);
  }
}

module.exports = pyramid;
