// Se pueden agrupar test con el describe
describe('Set', () => {
  // El beforeAll respeta el scope
  beforeAll(() => {
    console.log('BeforeAll1');
  });

  // El afterAll se ejecuta despues de todos los cases
  afterAll(() => {
    console.log('AfterAll1');
  });

  beforeEach(() => {
    console.log('Beforeeach');
  });

  afterEach(() => {
    console.log('aftereach');
  });

  test('case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('Case 2');
    expect(4 + 6).toBe(10);
  });
  describe('Other group', () => {
    beforeAll(() => {
      console.log('BeforeAll2');
    });

    afterAll(() => {
      console.log('AfterAll2');
    });

    test('case 3', () => {
      console.log('Case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('Case 4');
      expect(4 + 6).toBe(10);
    });
  });
});
