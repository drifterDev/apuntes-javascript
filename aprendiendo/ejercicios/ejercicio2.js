"use strict";

let suma = 0;
let cantidad = -1;
let media = 0;
let n = 0;
while (n >= 0) {
  if (isNaN(n)) {
    n = 0;
  }
  suma += n;
  cantidad++;
  n = parseInt(prompt("Introduce un valor", 0));
  if (isNaN(n)) {
    n = 0;
  }
}
alert("Suma = " + suma);
media = suma / cantidad;
alert("Media = " + media);
