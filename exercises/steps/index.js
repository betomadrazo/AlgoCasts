// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 0; i < n; i++) {
    let stp = '#';
    let spaces = '';
    for (let j = 0; j < i; j++) {
      stp += '#';
    }
    for (let k = n-1; k > i; k--) {
        spaces += ' ';
    }
    console.log(`${stp}${spaces}`);
  }
}

module.exports = steps;
