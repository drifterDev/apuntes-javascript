//  MIT License
//
// Copyright (c) 2023 Mateo Álvarez Murillo
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// This software and associated files are subject to the terms and conditions of
// the MIT License and are included in this distribution. A copy of the license
// can be found in the file LICENSE in the root of this distribution.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
