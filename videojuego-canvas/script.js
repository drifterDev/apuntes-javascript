"use strict";
const canvas = document.getElementById("canvas");
const game = canvas.getContext("2d");
let medida;
window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  let altura = window.innerHeight;
  let ancho = window.innerWidth;
  medida = Math.min(altura * 0.7, ancho * 0.7);
  canvas.setAttribute("width", medida);
  canvas.setAttribute("height", medida);

  //Lo invocamos así porque cada vez que se
  //cambia el tamaño del canvas su contenido se borra
  startGame();
}

function startGame() {
  //Metodos para rellenar el canvas
  //game.fillRect(0, 0, 0, 0);
  //game.clearRect(comienzax, comienzay, finalx,finaly)
  //game.fillText("hola", comienzax, comienzay)
  //game.font="tamaño font-fmaily"
  //game.fillstyle='red'
  //game.textAlign='center'
  //Metodo para manejar el canvas
  // let altura = window.innerHeight;
  // let ancho = window.innerWidth;
  // let medida = Math.min(altura * 0.7, ancho * 0.7);
  // canvas.setAttribute("width", medida);
  // canvas.setAttribute("height", medida);
  let elementSize = medida / 10 - 1;
  game.font = elementSize + "px Verdana";
  for (let i = 0; i < 10; i++) {
    game.fillText(emojis["X"], i * elementSize, elementSize);
  }
  //Canvas responsive
  //Añadiendo el evento a la ventana resize
}
