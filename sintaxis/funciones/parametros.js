// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

// Patametros REST y SPREAD
// rest
function listadoFrutas(fruta1, fruta2, ...rest) {
  console.log("fruta 1: ", fruta1);
  console.log("fruta 2: ", fruta2);
  console.log(rest);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Mango");
let frutas = ["Naranja", "Manzana"];
// Spread
listadoFrutas(...frutas, "Sandia", "Mango");
