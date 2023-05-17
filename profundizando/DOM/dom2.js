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

//Elegir elemento por etiqueta
let todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

//Lo siguiente es lo mismo
console.log(todosLosDivs[3].innerHTML);
console.log(todosLosDivs[1].textContent);

//Editar contenido
let texto = todosLosDivs[3];
texto.innerHTML = "Hola soy un div!";
console.log(todosLosDivs[3].textContent);
let element;

for (element in todosLosDivs) {
  if (todosLosDivs[element].textContent.length >= 1) {
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(todosLosDivs[element].textContent);
    parrafo.appendChild(texto);
    document.querySelector("section").appendChild(parrafo);
  }
}
