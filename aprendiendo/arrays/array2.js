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
