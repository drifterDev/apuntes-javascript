// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

//enhanced object literals
function newUser(user, age, country) {
  return {
    user,
    age,
    country,
  };
}

console.log(newUser("Mateo", 18, "CO"));
