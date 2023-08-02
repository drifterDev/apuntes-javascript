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
