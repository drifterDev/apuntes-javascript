"use strict";

// Funciones anonimas
let pais = function (nombre) {
  return "Nací en " + nombre;
};

// Callback
function suma(n1, n2, multiplicar, dividir) {
  let sumatoria = n1 + n2;
  multiplicar(sumatoria);
  dividir(sumatoria);
  return sumatoria;
}

//Le pasamos dos funciones anonimas
// y dento de la funcion las llamamos

console.log(
  suma(
    23,
    345,
    function (dato) {
      console.log("El dato es = " + dato * dato);
    },
    function (dato) {
      console.log("La division es = " + 1 / dato);
    }
  )
);
