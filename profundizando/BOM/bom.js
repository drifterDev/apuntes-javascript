"use strict";

//BOM (Browser object model)

//Tamaño de la ventana
//Tamaño de la pantalla
//Url de la pagina
function getBom() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(screen.height);
  console.log(screen.width);
  console.log(window.location.href);
}

function redirigiendo(url) {
  window.location.href = url;
}

getBom();
// redirigiendo("https://www.google.com/");

function abrirVentana(url) {
  // window.open(url);
  //Abrir una ventana con tamaño personalizado
  window.open(url, "", "width=400, height=400");
}
