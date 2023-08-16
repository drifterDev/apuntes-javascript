// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

let n = parseInt(prompt("Introduce el número", 1));
while (isNaN(n)) {
  n = parseInt(prompt("Entrada invalida, hazlo de nuevo", 1));
}

let c = 1;
while (c <= 10) {
  document.write(n + " X " + c + " == " + n * c + "<br/>");
  c++;
}
