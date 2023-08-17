// o matchers
test('test objeto', () => {
  const data = {
    name: 'Mateo',
  };
  expect(data).toEqual({ name: 'Mateo' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('regex', () => {
  expect('Mateo').toMatch(/ateo/);
});

test('arrays', () => {
  const nums = [1, 2, 3, 4];
  expect(nums).toContain(4);
});
