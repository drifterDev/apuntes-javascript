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

todosLosDivs.forEach((element, indice) => {
  let parrafo = document.createElement("p");
  let texto = element.textContent;
  parrafo.appendChild(texto);
});
