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

//Fetch (ajax) y peticiones a servicios / apis rest
window.addEventListener("load", function () {
  let usuarios = [];
  let usuarios2 = [];
  fetch("https://jsonplaceholder.typicode.com/users")
    //Lo convertimos a json

    .then((data) => data.json())
    .then((data) => {
      document.getElementById("cargando").style.display = "none";
      usuarios = data;
      console.log(usuarios);

      let nombre;
      for (nombre in usuarios) {
        let p = document.createElement("p");
        p.append(usuarios[nombre].name);
        document.getElementById("usuarios").append(p);
      }
    });

  fetch("https://reqres.in/api/users")
    //Lo convertimos a json
    .then((data) => data.json())
    .then((users) => {
      document.getElementById("cargando2").style.display = "none";

      usuarios2 = users.data;
      console.log(usuarios2);

      //Otra forma de hacer un recorrido
      usuarios2.map((users, i) => {
        let t = document.createElement("p");
        t.innerHTML = i + 1 + " " + users.first_name + " " + users.last_name;
        document.getElementById("usuarios2").append(t);
      });
    });
});
