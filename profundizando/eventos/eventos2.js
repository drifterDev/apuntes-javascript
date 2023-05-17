"use strict";

//Se hace el evento load para evitar que el
//javascript se cargue primero que la pagina
window.addEventListener("load", function () {
  let input = document.getElementById("nombre");

  //Focus
  //Cuando esta dentro del campo del input
  input.addEventListener("focus", function () {
    console.log("[focus] Estas dentro");
  });

  //Blur
  //Este evento se activa cuando se sale del campo del formulario
  input.addEventListener("blur", function () {
    console.log("[blur] Estas por fuera");
  });

  //Keypress
  //Cuando se pulsa un tecla
  input.addEventListener("keydown", function () {
    //El metodo es para convertir el numero de la respectiva
    //tecla lo convierte en un caracter del teclado
    console.log("[keydown] Teclea " + String.fromCharCode(event.keyCode));
  });

  //Keypress
  //Cuando se deja pulsada un tecla
  input.addEventListener("keypress", function () {
    //El metodo es para convertir el numero de la respectiva
    //tecla lo convierte en un caracter del teclado
    console.log(
      "[keypress] Esta pulsando " + String.fromCharCode(event.keyCode)
    );
  });

  //Keyup
  //Cuando se suelta una tecla
  input.addEventListener("keyup", function () {
    console.log(
      "[keyup] dejaste de presionar " + String.fromCharCode(event.keyCode)
    );
  });
});
