"use strict";

window.addEventListener("load", () => {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    window.location.href = "index2.html"; // Cambia la localización a la nueva página
  });
});
