"use strict";

window.addEventListener("load", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    limpiar();
    let dia = parseInt(document.querySelector("#input-dia").value);
    let mes = parseInt(document.querySelector("#input-mes").value);
    let ano = parseInt(document.querySelector("#input-ano").value);
    let date = new Date(ano, mes - 1, dia);
    if (isNaN(date) || !date instanceof Date) {
      console.log(date);
      diaLabel("Must be a valid day", "hsl(0, 100%, 67%)");
      mesLabel("Must be a valid month", "hsl(0, 100%, 67%)");
      anoLabel("Must be a valid year", "hsl(0, 100%, 67%)");
    }
    let valida = true;
    let hoy = new Date();
    if (ano > hoy.getFullYear()) {
      anoLabel("Must be in the past", "hsl(0, 100%, 67%)");
      valida = false;
    } else if (ano < hoy.getFullYear() - 99) {
      anoLabel("Must be a valid year", "hsl(0, 100%, 67%)");
      valida = false;
    }

    if (0 >= mes || mes >= 13) {
      mesLabel("Must be a valid month", "hsl(0, 100%, 67%)");
      valida = false;
    }
    if (0 >= dia || dia >= 32) {
      diaLabel("Must be a valid month", "hsl(0, 100%, 67%)");
      valida = false;
    }

    if (valida) {
      console.log("Ya casi");
      imprimir(date, hoy);
    }
  });

  function diaLabel(mensaje, color) {
    document.querySelector("#error-dia").textContent = mensaje;
    let labels = document.querySelectorAll("label");
    labels[0].style.color = color;
  }

  function mesLabel(mensaje, color) {
    document.querySelector("#error-mes").textContent = mensaje;
    let labels = document.querySelectorAll("label");
    labels[1].style.color = color;
  }

  function anoLabel(mensaje, color) {
    document.querySelector("#error-ano").textContent = mensaje;
    let labels = document.querySelectorAll("label");
    labels[2].style.color = color;
  }
  function limpiar() {
    diaLabel("", "hsl(0, 1%, 44%)");
    mesLabel("", "hsl(0, 1%, 44%)");
    anoLabel("", "hsl(0, 1%, 44%)");
  }

  function imprimir(date, hoy) {
    let diffTiempo = Math.abs(hoy.getTime() - date.getTime());

    let diff = Math.floor(diffTiempo / (1000 * 60 * 60 * 24));
    console.log(diff);
    let anos = Math.floor(diff / 365);
    let meses = Math.floor((diff - anos * 365) / 30);
    let dias = diff - anos * 365 - meses * 31;
    document.querySelector("#output-dia").textContent = dias;
    document.querySelector("#output-mes").textContent = meses;
    document.querySelector("#output-ano").textContent = anos;
  }
});
