const Person = require('./05-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Mateo', 45, 1.7);
  });
  test('Should return down', () => {
    // Triple A (AAA)
    // Arrange
    // Arranca, dado algo
    person.weight = 45;
    // Act, cuando
    const imc = person.calcIMC();
    // Assert, entonces
    expect(imc).toBe('down');
  });

  test('Should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
