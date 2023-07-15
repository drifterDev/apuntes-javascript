// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA(value) {
    this.a = value;
  },
};

//No copian los metodos
//Convertir de objeto a string
const obj2 = JSON.stringify(obj1);
console.log(obj2);

//Convertir de string a objeto
const obj3 = JSON.parse(obj2);
console.log(obj3);
