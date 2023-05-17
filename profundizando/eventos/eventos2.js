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

//Se hace el evento load para evitar que el
//javascript se cargue primero que la pagina
window.addEventListener("load", function () {
  let input = document.getElementById("nombre");

  //Focus
  //Cuando esta dentro del campo del input
  input.addEventListener("focus", function () {
    console.log("[focus] Estas dentro");
  });

  //Blur
  //Este evento se activa cuando se sale del campo del formulario
  input.addEventListener("blur", function () {
    console.log("[blur] Estas por fuera");
  });

  //Keypress
  //Cuando se pulsa un tecla
  input.addEventListener("keydown", function () {
    //El metodo es para convertir el numero de la respectiva
    //tecla lo convierte en un caracter del teclado
    console.log("[keydown] Teclea " + String.fromCharCode(event.keyCode));
  });

  //Keypress
  //Cuando se deja pulsada un tecla
  input.addEventListener("keypress", function () {
    //El metodo es para convertir el numero de la respectiva
    //tecla lo convierte en un caracter del teclado
    console.log(
      "[keypress] Esta pulsando " + String.fromCharCode(event.keyCode)
    );
  });

  //Keyup
  //Cuando se suelta una tecla
  input.addEventListener("keyup", function () {
    console.log(
      "[keyup] dejaste de presionar " + String.fromCharCode(event.keyCode)
    );
  });
});
