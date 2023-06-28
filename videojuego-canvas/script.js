"use strict";
const canvas = document.getElementById("canvas");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const game = canvas.getContext("2d");

const restricciones = {
  x: undefined,
  y: undefined,
};

let medida;
let elementSize;
const playerPosition = {
  x: undefined,
  y: undefined,
};

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
window.addEventListener("keydown", moveByKey);
btnDown.addEventListener("click", moveDown);
btnUp.addEventListener("click", moveUp);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

function setCanvasSize() {
  let altura = window.innerHeight;
  let ancho = window.innerWidth;
  medida = Math.min(altura * 0.7, ancho * 0.7);
  canvas.setAttribute("width", medida);
  canvas.setAttribute("height", medida);

  startGame();
}

function startGame() {
  elementSize = medida / 10 - 1;
  let filas = maps[0].trim().split("\n");
  let filasColumnas = filas.map((row) => row.trim().split(""));

  game.font = elementSize + "px Verdana";

  filasColumnas.forEach((row, i) => {
    row.forEach((col, i2) => {
      const emoticon = emojis[col];
      const posX = elementSize * i2;
      const posY = elementSize * (i + 1);
      game.fillText(emoticon, posX, posY);
      if (col == "O" && !playerPosition.x && !playerPosition.y) {
        playerPosition.x = posX;
        playerPosition.y = posY;
        restricciones.x = i2;
        restricciones.y = i;
        game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
      }
    });
  });
}

function movePlayer() {
  game.clearRect(0, 0, canvas.width, canvas.height);
  startGame();
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

function moveUp() {
  if (restricciones.y - 1 >= 0) {
    playerPosition.y -= elementSize;
    restricciones.y -= 1;
  }
  movePlayer();
}

function moveDown() {
  if (restricciones.y + 1 <= 9) {
    playerPosition.y += elementSize;
    restricciones.y += 1;
  }
  movePlayer();
}

function moveLeft() {
  if (restricciones.x - 1 >= 0) {
    playerPosition.x -= elementSize;
    restricciones.x -= 1;
  }
  movePlayer();
}

function moveRight() {
  if (restricciones.x + 1 <= 9) {
    playerPosition.x += elementSize;
    restricciones.x += 1;
  }
  movePlayer();
}

function moveByKey(evento) {
  let key = evento.key.toLowerCase();
  if (key == "arrowleft" || key == "a") moveLeft();
  else if (key == "arrowright" || key == "d") moveRight();
  else if (key == "arrowdown" || key == "s") moveDown();
  else if (key == "arrowup" || key == "w") moveUp();
  movePlayer();
}
