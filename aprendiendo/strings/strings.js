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

// Metodos para manejo de strings
let n = 444;
let word = "Hola soy un STRING jajajaja";
let text = "Hola soy OTRO texto :v";

console.log(typeof n.toString());
console.log(word.toLowerCase());
console.log(text.toUpperCase());
console.log(text.length);
console.log(text.concat(" ", ":", word));

// Metodos de busqueda de strings
let palabra = "carlos";
let parrafo = "mi nombre es carlos";

console.log(parrafo.search(palabra));
console.log(parrafo.indexOf(palabra));
console.log(parrafo.lastIndexOf("e"));
console.log(parrafo.match("mi"));
console.log(parrafo.match(/[a-z]+/g));
console.log(parrafo.substring(3, 13));
console.log(parrafo.charAt(13));
console.log(parrafo.startsWith("mi"));
console.log(parrafo.includes("es"));

// Metodos para reemplazar
let pala = "manzana";
let frutas = "Mi fruta favorita es la naranja    ";

console.log(frutas.replace("naranja", pala));
console.log(frutas.slice(9, 17));
console.log(frutas.split(" "));
// Quita los espacios en blanco al final y al inicio
console.log(frutas.trim());
