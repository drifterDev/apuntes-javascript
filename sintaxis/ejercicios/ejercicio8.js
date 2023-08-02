// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

let n1 = parseInt(prompt("Introduce el número", 1));
while (isNaN(n1)) {
  n1 = parseInt(prompt("Entrada invalida, hazlo de nuevo", 1));
}

let operacion = "";
while (true) {
  operacion = prompt("Introduce la operacion");
  if (
    operacion == "/" ||
    operacion == "+" ||
    operacion == "-" ||
    operacion == "*"
  ) {
    break;
  }
}

let n2 = parseInt(prompt("Introduce el número", 1));
while (isNaN(n2)) {
  n2 = parseInt(prompt("Entrada invalida, hazlo de nuevo", 1));
}

let resultado = 0;
switch (operacion) {
  case "+":
    resultado = n1 + n2;
    document.write(n1 + " + " + n2 + " == " + resultado);
    break;
  case "-":
    resultado = n1 - n2;
    document.write(n1 + " - " + n2 + " == " + resultado);
    break;
  case "*":
    resultado = n1 * n2;
    document.write(n1 + " * " + n2 + " == " + resultado);
    break;
  case "/":
    if (n2 == 0) {
      document.write("No se puede dividir por 0");
      break;
    }
    resultado = n1 / n2;
    document.write(n1 + " / " + n2 + " == " + resultado);
    break;
}
