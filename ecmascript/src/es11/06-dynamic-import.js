// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const btn = document.getElementById("btn");
btn.addEventListener("click", async function () {
  const module = await import("./module.js");
  module.hello();
});
