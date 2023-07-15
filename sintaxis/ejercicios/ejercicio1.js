// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

let n1 = parseInt(prompt("Ingresa el valor de n1:", 0));
let n2 = parseInt(prompt("Ingresa el valor de n2:", 0));

while (n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2)) {
  let n1 = parseInt(prompt("Ingresa el valor de n1:", 0));
  let n2 = parseInt(prompt("Ingresa el valor de n2:", 0));
}

if (n1 > n2) {
  alert("N1 es más grande que N2");
} else if (n1 < n2) {
  alert("N2 es más grande que N1");
} else {
  alert("N1 y N2 son iguales");
}
