// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

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
