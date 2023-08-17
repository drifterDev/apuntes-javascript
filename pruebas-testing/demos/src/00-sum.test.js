const sum = require('./00-sum');

test('Adds 1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});
