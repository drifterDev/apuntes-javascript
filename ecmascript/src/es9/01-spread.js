// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const user = {
  userName: "Drifter",
  age: 18,
  country: "CO",
};

const { userName, ...values } = user;
console.log(userName);
console.log(values);
