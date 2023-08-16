// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
let nombres = ["Mateo", "Diego", "Tomas"];

// Recorrido de arrays
//El segundo y tercer parametro son opcionales
nombres.forEach((elemento, indice, arr) => {
  console.log(arr); //Devuelve el array
  console.log(elemento, indice);
});

let paises = ["colombia", "venezuela", "ecuador"];
for (let pais in paises) {
  console.log(paises[pais]);
}

//Busqueda en array

//let busqueda = paises.find((pais) => pais == "venezuela");
let indice = paises.findIndex((pais) => pais == "venezuela");

let busqueda = paises.find(function (pais) {
  return pais == "venezuela";
});
console.log(busqueda);
console.log(indice);

let numeros2 = [1, 4, 46, 87, 23];
let bool = numeros2.find((n) => n == 23);
console.log(bool);
