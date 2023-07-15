// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

window.addEventListener("load", () => {
  let fecha = new Date();
  console.log(fecha);

  let year = fecha.getFullYear();
  let mes = fecha.getMonth();
  let dia = fecha.getDate();
  let hora2 = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  //Comillas invertidas para hacer un  texto largo
  let hora = `
  El año es: ${year}
  El mes es: ${mes}
  El día es: ${dia}
  La hora es: ${hora2}
  El minuto es: ${minutos}
  Los segundos son: ${segundos}
  `;
  console.log(hora);
});
