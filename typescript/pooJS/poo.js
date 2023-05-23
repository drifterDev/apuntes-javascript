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
