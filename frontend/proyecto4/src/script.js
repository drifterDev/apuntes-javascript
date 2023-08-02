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

const options = { method: "GET" };
const url = "https://api.adviceslip.com/advice";

function imagen() {
  const img = document.getElementById("separador");
  const newSrc = window.matchMedia("(max-width: 375px)").matches
    ? "../images/pattern-divider-mobile.svg"
    : "../images/pattern-divider-desktop.svg";
  img.src = newSrc;
}

async function advice() {
  try {
    const response = await fetch(url, options);
    const jason = await response.json();
    return jason.slip;
  } catch (err) {
    console.log(err);
    throw error;
  }
}

async function actualizarAdvice() {
  const number = document.getElementById("advice");
  const text = document.getElementById("advice_text");
  try {
    const info = await advice();
    number.textContent = await info.id;
    text.textContent = await info.advice;
    console.log(info);
  } catch (err) {
    console.log(err);
    text.textContent = "Error al obtener advice";
    number.textContent = "Error";
  }
}

window.addEventListener("load", () => {
  const dice = document.getElementById("dice");
  const imgDice = document.getElementById("imgDice");
  imagen();
  actualizarAdvice();
  dice.addEventListener("click", actualizarAdvice);
  imgDice.addEventListener("click", actualizarAdvice);
});
window.addEventListener("resize", imagen);
