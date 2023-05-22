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

window.addEventListener("load", () => {
  //LocalStorage
  //Comprobamos si podemos usarlo
  if (typeof Storage !== "undefined") {
    console.log("Se puede usar localStorage");
  } else {
    console.log("No se puede usar localStorage");
  }

  //Procedemos a utilizarlo
  //Guardando datos

  //Crear item (clave, valor)
  localStorage.setItem("titulo", "El bestiario de axlin");

  //Recuperar item
  document.querySelector("#libros").innerHTML = localStorage.getItem("titulo");
  console.log(localStorage.getItem("titulo"));

  //Guardar objetos
  let usuario = {
    name: "Mateo",
    email: "mateo@alvarez.dev",
    age: 24,
  };

  //Se suele guardar datos en tipo string o un numero, no objetos :(
  //Se convierte el objeto en tipo json.string
  localStorage.setItem("usuario", JSON.stringify(usuario));

  //Recuperar json.string
  //El metodo es para convertir el string en el objeto json
  let jason = JSON.parse(localStorage.getItem("usuario"));
  console.log(jason);

  //Para eliminar items
  localStorage.removeItem("usuario");

  //Para vacear todo el local storage
  // localStorage.clear()
});
