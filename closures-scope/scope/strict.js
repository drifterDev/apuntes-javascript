// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
pi = 3.1416; //Daría error por no declarar
console.log(pi);

function funcion() {
  "use strict";
  return (pi = 3.1416);
}
//Da error por no declararla
console.log(funcion());
