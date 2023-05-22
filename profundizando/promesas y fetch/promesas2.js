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
  getUsuarios()
    .then((data) => data.json())
    .then((users) => {
      document.getElementById("cargando2").style.display = "none";
      listadoUsuarios(users.data);
      return getInfo();
    })
    .then((data) => {
      console.log(data);
      return getUsuario();
    })

    .then((data) => data.json())
    .then((usuario) => {
      mostrarUsuario(usuario.data);
    });

  function getUsuarios() {
    return fetch("https://reqres.in/api/users");
  }

  function getUsuario() {
    return fetch("https://reqres.in/api/users/2");
  }

  //CREAR PROMESAS
  function getInfo() {
    let estudiante = {
      nombre: "Mateo",
      apellido: "Alvarez",
      email: "mateo@developer",
    };
    //Resolve es que se cumple la promesa
    //Reject es cuando no se cumple la promesa
    return new Promise((resolve, reject) => {
      let estudiante_string = "";
      setTimeout(function () {
        estudiante_string = JSON.stringify(estudiante);
        if (typeof estudiante_string != "string" || estudiante_string == "") {
          return reject("Error");
        } else {
          return resolve(estudiante_string);
        }
      }, 3000);
    });
  }
  //////////////////////////////////

  function mostrarUsuario(usuario) {
    document.getElementById("cargando").style.display = "none";
    let t = document.createElement("p");
    t.innerHTML = usuario.first_name + " " + usuario.last_name;

    document.getElementById("usuarios").append(t);
  }

  function listadoUsuarios(usuarios2) {
    usuarios2.map((users, i) => {
      let t = document.createElement("p");
      let j = document.createElement("img");

      j.src = users.avatar;
      j.width = "100";

      t.innerHTML = i + 1 + " " + users.first_name + " " + users.last_name;
      document.getElementById("usuarios2").append(t);
      document.getElementById("usuarios2").appendChild(j);
    });
  }
});
