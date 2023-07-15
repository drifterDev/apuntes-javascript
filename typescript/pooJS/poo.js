// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

window.addEventListener("load", function () {
  let bicicleta = {
    color: "rojo",
    modelo: "BMX",
    frenos: "De disco",
    velocidadMax: 240,
    cambiarColor: function (color) {
      this.color = color;
    },
  };
  console.log(bicicleta);
  bicicleta.cambiarColor("amarillo");
  console.log(bicicleta);
});
