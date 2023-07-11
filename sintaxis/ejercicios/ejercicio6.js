"use strict";

let n = parseInt(prompt("Introduce el número", 1));
while (isNaN(n)) {
  n = parseInt(prompt("Entrada invalida, hazlo de nuevo", 1));
}

if (n < 0) {
  document.write("El número es negativo");
} else {
  document.write("El número es positivo");
}
document.write("<br/>");

if (n % 2 == 0) {
  document.write("El número es par");
} else {
  document.write("El número es impar");
}
