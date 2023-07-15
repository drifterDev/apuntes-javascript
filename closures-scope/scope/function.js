// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function greeting() {
  let userName = "Mateo";
  console.log(userName);

  if (userName === "Mateo") {
    console.log("Hello " + userName);
  }
}

greeting();
//No se puede accer a userName porque es funtion scope
// console.log(userName);
