// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

async function* anotherGenerator() {
  for (let i = 1; i < 6; i++) {
    yield await Promise.resolve(i);
  }
}

console.log("Comenzo");
const other = anotherGenerator();
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
other.next().then((Response) => console.log(Response.value));
console.log("Termino");
