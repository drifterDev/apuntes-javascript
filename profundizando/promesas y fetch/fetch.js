// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

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
