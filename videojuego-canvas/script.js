"use strict";
const canvas = document.getElementById("canvas");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame() {
  //Metodos para rellenar el canvas
  //game.fillRect(0, 0, 0, 0);
  //game.clearRect(comienzax, comienzay, finalx,finaly)
  //game.fillText("hola", comienzax, comienzay)
  //game.font="tamaño font-fmaily"
  //game.fillstyle='red'
  //game.textAlign='center'

  //Metodo para manejar el canvas
  let altura = window.innerHeight;
  let ancho = window.innerWidth;
  let medida = Math.min(altura * 0.7, ancho * 0.7);
  canvas.setAttribute("width", medida);
  canvas.setAttribute("height", medida);

  let elementSize = medida / 10;
  game.font = elementSize + "px Verdana";
  game.fillText(emojis["X"], 100, 100);
}
