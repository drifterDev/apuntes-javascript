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

window.addEventListener("load", function () {
  let libro = {
    titulo: "El nombre del viento",
    year: 2004,
    country: "USA",
  };

  console.log(libro);
  console.log(libro.titulo);
  console.log(libro.year);
  libro.year = 2005;
  console.log(libro.year);
  console.log(libro.country);

  let libros = [
    { titulo: "El bestiario de axlin", year: 2015, country: "Spain" },
    { titulo: "El secreto de Xein", year: 2016, country: "Spain" },
    { titulo: "La mision de Rox", year: 2018, country: "Spain" },
    libro,
  ];

  let cajaLibros = document.getElementById("libros");
  let index;
  for (index in libros) {
    let p = document.createElement("p");
    p.append(libros[index].titulo + " - " + libros[index].year);
    cajaLibros.append(p);
  }
});
