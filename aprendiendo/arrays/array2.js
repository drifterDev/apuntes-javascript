"use strict";

let categorias = [
  ["accion", "ciencia ficcion"],
  ["fantasia", "romance"],
  ["suspense", "terror"],
];

let frutas = ["manzana", "mango", "pera", "banana"];

console.log(categorias[1][0]);

// Metodos array
categorias.push(["Biografias", "Ficcion"]);
console.log(categorias);
categorias.pop();
console.log(categorias);
let indice = categorias.indexOf("mango");
// Da -1 si no esta en el array
console.log(frutas.splice(indice, 1));
console.log(frutas.join(", "));

let secuencia = "9, 2, 5, 4, 3";
let numeros = secuencia.split(", ");
console.log(numeros);

console.log(numeros.sort());
console.log(numeros.reverse());
