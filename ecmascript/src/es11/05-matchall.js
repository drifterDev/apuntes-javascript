// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const regex = /\b(kiwi)\b/g;
const passwords = "kiwi, hola, kiwi, sdfjal, wierj, otra vez kiwi";

for (const match of passwords.matchAll(regex)) {
  console.log(match);
}
