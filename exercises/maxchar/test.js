const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('k')).toEqual('k');
  expect(maxChar('Hello there, mystic motherfuckerskkkkkkkkkkiu kkkkkkkk')).toEqual('k');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
