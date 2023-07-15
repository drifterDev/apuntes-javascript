// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

let numeros = [];

let c = 0;
let n = undefined;
while (c < 6) {
  n = parseInt(prompt("Ingresa un número: ", 0));
  if (!isNaN(n)) {
    numeros.push(n);
    c++;
  }
}
document.write(numeros);
console.log(numeros);
document.write("<br/>");
document.write(numeros.sort());
console.log(numeros);
document.write("<br/>");
document.write(numeros.reverse());
console.log(numeros);
document.write("<br/>");
document.write("El array tiene " + numeros.length + " elementos");
console.log("El array tiene " + numeros.length + " elementos");
document.write("<br/>");

let bool = numeros.find((n) => n <= 0);
if (bool) {
  document.write("Hay al menos un número negativo o igual a cero");
  console.log("Hay al menos un número negativo o igual a cero");
} else {
  document.write("Hay al menos un número negativo o igual a cero");
  console.log("Hay al menos un número negativo o igual a cero");
}
