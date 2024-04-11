import { Animal, Dog } from './09-protected';
//Cuanod hacemos la clase animal abstracta
//Las clases abstractas no permiten instancias de estas
//Son utiles cuando queremos cierto comportamiento de sus hijos
// const animal1 = new Animal('Mochi');  ERROR
// animal1.greeting();

const perro1 = new Dog('Firu', 'Libardo');
perro1.woof(4);
