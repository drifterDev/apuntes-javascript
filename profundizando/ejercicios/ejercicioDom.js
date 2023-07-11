"use strict";

window.addEventListener("load", function () {
  let formulario = document.getElementById("formulario");
  //let formulario = document.querySelector("#formulario")

  let boxes = document.getElementsByClassName("box");
  let dashed = boxes[1];
  dashed.style.display = "none";

  formulario.addEventListener("submit", function () {
    console.log("Evento submit capturado");

    //Capturar valores del form
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    // Para validar el formulario
    //Trim para eliminar espacios en blanco
    if (nombre.trim() == null || nombre.trim().length == 0) {
      alert("Nombre no es valido");
      let error = document.getElementById("error1");
      error.innerText = "Error en el nombre!";
      return false;
    } else {
      let error = document.getElementById("error1");
      error.innerText = "";
    }

    if (apellidos.trim() == null || apellidos.trim().length == 0) {
      alert("Apellidos no es valido");
      let error = document.getElementById("error2");
      error.innerText = "Error en los apellidos!";
      return false;
    } else {
      let error = document.getElementById("error2");
      error.innerText = "";
    }

    if (edad.trim() == null || parseInt(edad) <= 0 || isNaN(parseInt(edad))) {
      alert("Edad no es valido");
      let error = document.getElementById("error3");
      error.innerText = "Error en la edad!";
      return false;
    } else {
      let error = document.getElementById("error3");
      error.innerText = "";
    }

    let datos_form = [nombre, apellidos, edad];
    let acompanante = ["Nombre: ", "Apellidos: ", "Edad: "];

    let campo;
    dashed.style.display = "block";
    for (campo in datos_form) {
      let parrafo = document.createElement("p");
      parrafo.append(acompanante[campo] + datos_form[campo]);
      dashed.append(parrafo);
    }
  });
});
