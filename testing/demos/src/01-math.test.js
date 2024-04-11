const {
  sum, multiply, division, subtraction,
} = require('./01-math');

test('suma 1 + 3 = 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
  const rta2 = sum(15, 4);
  expect(rta2).toBe(19);
});

test('resta 5 - 3 = 2', () => {
  const rta = subtraction(5, 3);
  expect(rta).toBe(2);
});

test('multiplica 3 * 4 = 12', () => {
  const rta = multiply(4, 3);
  expect(rta).toBe(12);
});

test('divide 90 / 9 = 10', () => {
  const rta = division(90, 9);
  expect(rta).toBe(10);
  const rta2 = division(20, 0);
  expect(rta2).toBeNull();
});
