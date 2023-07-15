// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

window.addEventListener("load", () => {
  let form = document.querySelector("#anadir");
  form.addEventListener("submit", function () {
    let titulo = document.querySelector("#addLibro").value;
    if (titulo.length > 0) {
      localStorage.setItem(titulo, titulo);
    }
  });

  let libro;
  for (libro in localStorage) {
    if (typeof localStorage[libro] == "string") {
      let li = document.createElement("li");
      li.append(localStorage[libro]);
      document.querySelector("#libros-list").append(li);
    }
  }

  let form2 = document.querySelector("#eliminar");
  form2.addEventListener("submit", function () {
    let valor = document.querySelector("#removeLibro").value;
    if (typeof valor == "string" && valor.length > 0) {
      localStorage.removeItem(valor);
    }
  });
});
