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
let level = 0;
let lives = 3;
const playerPosition = {
  x: undefined,
  y: undefined,
};

const giftPosition = {
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
  game.clearRect(0, 0, canvas.width, canvas.height);
  elementSize = medida / 10 - 1;
  game.font = elementSize + "px Verdana";
  let mapa = maps[level];
  if (!mapa) {
    gameWin();
    return;
  }
  let filas = mapa.trim().split("\n");
  let playerDead = false;
  let filasColumnas = filas.map((row) => row.trim().split(""));
  filasColumnas.forEach((row, i) => {
    row.forEach((col, j) => {
      const emoticon = emojis[col];
      const posX = elementSize * j;
      const posY = elementSize * (i + 1);
      game.fillText(emoticon, posX, posY);
      if (col == "O" && !playerPosition.x && !playerPosition.y) {
        playerPosition.x = posX;
        playerPosition.y = posY;
        restricciones.x = j;
        restricciones.y = i;
        game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
      } else if (col == "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (emoticon == emojis["X"]) {
        if (Math.round(posX) == Math.round(playerPosition.x)) {
          if (Math.round(posY) == Math.round(playerPosition.y)) {
            playerDead = true;
          }
        }
      }
    });
  });
  if (playerDead) {
    game.fillText(emojis["BOMB_COLLISION"], playerPosition.x, playerPosition.y);
    setTimeout(gameOver, 250);
  } else {
    game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
  }
}

function movePlayer() {
  const posicionX = Math.round(playerPosition.x) == Math.round(giftPosition.x);
  const posicionY = Math.round(playerPosition.y) == Math.round(giftPosition.y);
  startGame();
  if (posicionX && posicionY) {
    levelWin();
  }
}

function moveUp() {
  if (restricciones.y - 1 >= 0) {
    playerPosition.y -= elementSize;
    restricciones.y -= 1;
    movePlayer();
  }
}

function moveDown() {
  if (restricciones.y + 1 <= 9) {
    playerPosition.y += elementSize;
    restricciones.y += 1;
    movePlayer();
  }
}

function moveLeft() {
  if (restricciones.x - 1 >= 0) {
    playerPosition.x -= elementSize;
    restricciones.x -= 1;
    movePlayer();
  }
}

function moveRight() {
  if (restricciones.x + 1 <= 9) {
    playerPosition.x += elementSize;
    restricciones.x += 1;
    movePlayer();
  }
}

function moveByKey(evento) {
  let key = evento.key.toLowerCase();
  if (key == "arrowleft" || key == "a") moveLeft();
  else if (key == "arrowright" || key == "d") moveRight();
  else if (key == "arrowdown" || key == "s") moveDown();
  else if (key == "arrowup" || key == "w") moveUp();
  else return;
}

function levelWin() {
  level++;
  startGame();
}

function gameWin() {
  alert("ganaste");
}

function gameOver() {
  lives -= 1;
  if (lives <= 0) {
    level = 0;
    lives = 3;
  }
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}
