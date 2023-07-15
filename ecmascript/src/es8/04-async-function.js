// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hola");
};

console.log("Antes");
anotherFn();
console.log("Despues");

//Antes
//Despues
//Async!!!!
//Hola
