// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

var nombre = prompt("Nombre: ");
var apellidos = prompt("Apellidos: ");

// Comillas invertidas para crear la plantillas
var texto = ` 
  <h1>Hola, bienvenido</h1>
  <h3>Mi nombre es ${nombre + " " + apellidos}</h3>
`;
document.write(texto + "<br/>");
