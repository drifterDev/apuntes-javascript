"use strict";

window.addEventListener("load", function () {
  const gatos = [
    document.getElementById("gato1"),
    document.getElementById("gato2"),
    document.getElementById("gato3"),
    document.getElementById("gato4"),
    document.getElementById("gato5"),
  ];

  for (let i = 0; i < gatos.length; i++) {
    gatos[i].addEventListener("click", function () {
      var cont = 1;
      for (let j = 0; j < gatos.length; j++) {
        gatos[j].style.transition = "all 5000ms";
        if (j == i) {
          gatos[j].style.gridColumn = String(cont) + "/" + String(cont + 8);
          cont += 8;
        } else {
          gatos[j].style.gridColumn = String(cont) + "/" + String(cont + 1);
          cont += 1;
        }
      }
    });
  }
});
