const withoutEnd = () => {
  while (true) {
    console.log('Nunca para');
  }
};

//Typescript reconoce que la funcion no tiene un break
//y se ejecutará de forma infinita

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }
  return fail('Not match');
};

console.log(example('Hola'));
console.log(example([1, 2, 34, 4]));
console.log(example(12345));
console.log(example('true'));
