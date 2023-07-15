// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
function person(name) {
  this.name = name;
}

person.prototype.greet = function () {
  return "Hello I am a Person";
};

var person = new person("Mateo");
console.log(person.name);
console.log(person.greet());

//Mejor
class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello I am a student";
  }
}

var student = new Student("Daniel");
console.log(student.name);
console.log(student.greet());
