// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function sumWithClosure(firstNum) {
  let otraFuncion = function sumWithClosure2(secondNum = 0) {
    return firstNum + secondNum;
  };
  return otraFuncion;
}

console.log(sumWithClosure(2)(3));
console.log(sumWithClosure(90)());
