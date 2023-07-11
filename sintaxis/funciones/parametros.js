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
