// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

//Fetch (ajax) y peticiones a servicios / apis rest
window.addEventListener("load", function () {
  getUsuarios()
    .then((data) => data.json())
    .then((users) => {
      document.getElementById("cargando2").style.display = "none";
      listadoUsuarios(users.data);

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
