// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
// Ámbito global
let greeting = "Hello World";
function greet() {
  console.log(greeting);
}
greet(); // Hello world

// Ámbito local o de función
function greet() {
  let greeting = "Hello World";
  console.log(greeting);
}
greet(); // Hello world
console.log(greeting); // Variable no definida

// Ámbito de bloque
{
  let greeting = "Hello World";
  var lang = "English";
  console.log(greeting);
}
console.log(lang); // English
console.log(greeting); // Uncaught ReferenceError: greeting is not defined

// Ámbito estático o dinámico
const age = 28;
function printAge() {
  console.log(age);
}
function mainApp() {
  const age = 26;
  printAge();
}
mainApp(); // 28
