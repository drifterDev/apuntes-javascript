import { Dog } from './09-protected';

//Genericos
// function getValue(value: number | string) {
//   return value;
// }

//Con este detalle se puede inferir el tipado al retornar

function getValue<myType>(value: myType) {
  return value;
}

//Se infiere el tipado
getValue(12).toFixed();
getValue('12').toUpperCase();

//Se pone manualmente el tipado
getValue<number>(12).toFixed();
getValue<string>('12').toUpperCase();
const perro = new Dog('Firu', 'Pedro');
getValue<Dog>(perro).woof(3);
