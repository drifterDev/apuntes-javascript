// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const regex = /(\d{2})-(\d{2})-(\d{4})/;
const matchers = regex.exec("15-08-2004");
console.table(matchers);
