// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  anotherFn();
} catch {
  console.log("Error encontrado");
}
