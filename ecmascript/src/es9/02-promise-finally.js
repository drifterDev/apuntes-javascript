// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject(new Error("Error en el if"));
    }
  });
};

anotherFunction()
  .then((Response) => console.log(Response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Termino la promesa"));
