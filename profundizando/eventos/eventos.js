"use strict";

//Evento Mouse
let boton = document.getElementById("boton");
let caja = document.getElementById("caja");

function cambiarColor() {
  console.log("1");
  let color = boton.style.background;
  if (color == "red") {
    boton.style.background = "green";
  } else if (color == "green") {
    boton.style.background = "blue";
  } else {
    boton.style.background = "red";
  }
  return true;
}

//Añade un escuchador de eventos a cualquier objeto del html
boton.addEventListener("click", cambiarColor);

//Mouse over
boton.addEventListener("mouseover", function () {
  boton.style.background = "black";
});

//Mouse out
boton.addEventListener("mouseout", function () {
  boton.style.background = "white";
});
