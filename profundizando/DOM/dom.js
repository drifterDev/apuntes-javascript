// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

//Las dos formas son validas
// let caja=document.querySelector("caja");
let caja = document.getElementById("caja");
console.log(caja);

//Editar propiedades de css
caja.style.backgroundColor = "red";
caja.style.textShadow = "0 0 2px black";

//Editar propiedades de html
caja.className = "claseCaja";

// Para sacar el texto de una etiqueta
console.log(caja.innerHTML);
let texto = document.getElementById("caja").innerHTML;
console.log(texto);
