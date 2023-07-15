// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

let n = parseInt(prompt("Introduce el número", 1));
while (isNaN(n)) {
  n = parseInt(prompt("Introduce el número", 1));
}
let c = 1;
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    document.write("Divisor #" + c + " = " + i + "<br/>");
    c++;
  }
}
