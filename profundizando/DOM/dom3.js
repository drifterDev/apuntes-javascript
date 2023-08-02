// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

let clasesRojas = document.getElementsByClassName("rojo");
console.log(clasesRojas);
let div;
for (div in clasesRojas) {
  if (clasesRojas[div].className == "rojo") {
    clasesRojas[div].style.background = "red";
  }
}
let amarillo = document.getElementsByClassName("amarillo");
amarillo[0].style.background = "yellow";

// Query selector
let claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

let etiqueta = document.querySelector("div");
console.log(etiqueta);
