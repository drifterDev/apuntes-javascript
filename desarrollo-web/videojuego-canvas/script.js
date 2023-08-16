// MIT License

// Copyright (c) 2023 Mateo Álvarez Murillo

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

"use strict";
const canvas = document.getElementById("canvas");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnReset = document.getElementById("reset");
const game = canvas.getContext("2d");
const spanVidas = document.getElementById("lives");
const spanTime = document.getElementById("time");
const spanRecord = document.getElementById("record");
const spanResult = document.getElementById("result");
const spanWin = document.getElementById("win");
const restricciones = {
  x: undefined,
  y: undefined,
};

let medida;
let elementSize;
let level = 0;
let lives = 5;
let timeStart = undefined;
let timeInterval = undefined;
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
btnReset.addEventListener("click", reset);

function reset() {
  location.reload();
}
function setCanvasSize() {
  let altura = window.innerHeight;
  let ancho = window.innerWidth;
  medida = Math.min(altura * 0.6, ancho * 0.6);
  canvas.setAttribute("width", medida);
  canvas.setAttribute("height", medida);
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}

function startGame() {
  showLives();
  game.clearRect(0, 0, canvas.width, canvas.height);
  elementSize = medida / 10 - 1;
  game.font = elementSize + "px Verdana";
  let mapa = maps[level];

  if (level == 5) {
    giftPosition.x = -100;
    giftPosition.y = -100;
  } else if (level == -1) {
    mapa = falla;
    let filas = mapa.trim().split("\n");
    let filasColumnas = filas.map((row) => row.trim().split(""));
    filasColumnas.forEach((row, i) => {
      row.forEach((col, j) => {
        const emoticon = emojis[col];
        const posX = elementSize * j;
        const posY = elementSize * (i + 1);
        game.fillText(emoticon, posX, posY);
      });
    });
    level = 0;
    setTimeout(startGame, 500);
  }
  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
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
    setTimeout(gameOver, 100);
  } else {
    game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
  }
  if (level == 5) {
    gameWin();
  }
  showRecord();
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
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  if (level == 5) {
    giftPosition.x = 9999999;
    giftPosition.y = 9999999;
    spanWin.innerHTML = "YOU WIN!";
    clearInterval(timeInterval);
  }
  startGame();
}

function gameWin() {
  const recordTime = localStorage.getItem("record_time");
  const playerTime = Date.now() - timeStart;
  if (recordTime) {
    if (playerTime > recordTime) {
      spanResult.innerHTML = "You haven't been able to surpass the record.";
    } else {
      spanResult.innerHTML = "Congratulations! You have surpassed the record!";
    }
  } else {
    localStorage.setItem("record_time", playerTime);
  }
}

function gameOver() {
  lives -= 1;
  if (lives <= 0) {
    level = -1;
    lives = 5;

    timeStart = Date.now();
  }
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}

function showLives() {
  spanVidas.innerHTML = "♥".repeat(lives);
}

function showTime() {
  let tiempo = Date.now() - timeStart;
  spanTime.innerHTML = tiempo;
}

function showRecord() {
  if (localStorage.getItem("record_time")) {
    spanRecord.innerHTML = localStorage.getItem("record_time");
  }
}
