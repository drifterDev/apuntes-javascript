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

// Recorrido de arrays
//El segundo y tercer parametro son opcionales
nombres.forEach((elemento, indice, arr) => {
  console.log(arr); //Devuelve el array
  document.write("<strong>" + indice + " - " + elemento + "</strong><br/>");
});
