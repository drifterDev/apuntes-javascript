// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

// El hoisting es una característica de JavaScript que permite declarar variables y funciones después de que se han utilizado.
var greetVar = "Hello";
(function () {
  console.log(greetVar);
  var greetVar = "Hi";
  console.log(greetVar);
})();

greet(); //Hello world!

function greet() {
  let greeting = "Hello world!";
  console.log(greeting);
}
