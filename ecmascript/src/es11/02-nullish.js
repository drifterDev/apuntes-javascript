// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

let anotherNumber = null;
let validate = anotherNumber ?? 5;
console.log(validate);

anotherNumber = 1;
validate = anotherNumber ?? 5;
console.log(validate);
