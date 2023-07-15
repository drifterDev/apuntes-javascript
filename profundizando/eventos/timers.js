// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

window.addEventListener("load", function () {
  let boton = document.getElementById("boton");

  //Timers

  //Los setInterval se ejecutan multiples veces
  //Se define la funcion y luego se especifica el tiempo en milisegundos
  function intervalo() {
    let tiempo = setInterval(function () {
      console.log("Hola soy setInterval");
      if (boton.style.background == "red") {
        boton.style.background = "blue";
      } else {
        boton.style.background = "red";
      }
    }, 3000);
    return tiempo;
  }

  //Los setTimeOut solo se ejecuta una sola vez
  let tiempo2 = setTimeout(function () {
    console.log("Hola soy setTimeOut");
    if (boton.style.background == "red") {
      boton.style.background = "blue";
    } else {
      boton.style.background = "red";
    }
  }, 4000);

  let tiempo = intervalo();

  //Para eliminar el intervalo
  let stop = document.getElementById("stop");
  stop.addEventListener("click", function () {
    clearInterval(tiempo);
  });

  //Para comenzar el intervalo
  let start = document.getElementById("start");
  start.addEventListener("click", function () {
    intervalo();
  });
});
