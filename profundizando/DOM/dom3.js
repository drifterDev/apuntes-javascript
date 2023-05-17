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
