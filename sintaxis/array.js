// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

// Array, arreglos, matrices

let nombres = ["Mateo", "Diego", "Tomas"];
let lenguajes = new Array(["CSS", "HTML"], "Javascript");
console.log(nombres[2]);

for (let i = 0; i < nombres.length; i++) {
  document.write("Nombre: " + nombres[i] + "<br/>");
}

// Metodos para los Array
console.log(nombres.length);
