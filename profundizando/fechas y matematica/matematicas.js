// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

//La parte matematica de js se accede con math
window.addEventListener("load", function () {
  console.log(Math.random()); //Entre 1 y 0

  let nums = [1, 2, 3, 4, 5, 6];
  console.log(Math.max(...nums));
});
