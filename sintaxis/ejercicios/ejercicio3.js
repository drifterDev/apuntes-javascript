// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

let n1 = parseInt(prompt("Introduce un valor", 0));
let n2 = parseInt(prompt("Introduce un valor", 0));

while (isNaN(n1) || isNaN(n2)) {
  n1 = parseInt(prompt("Introduce un valor", 0));
  n2 = parseInt(prompt("Introduce un valor", 0));
}

let mayor = n1 < n2 ? n2 : n1;
let menor = mayor == n1 ? n2 : n1;
for (let i = menor; i < mayor + 1; i++) {
  document.write("Valor esperado..." + i + "<br/>");
}
