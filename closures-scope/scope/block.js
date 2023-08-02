// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function frutas() {
  //El bloque se pueden acceder let y const en un mismo bloque
  if (true) {
    //Bloque
    var fruta1 = "mango";
    let fruta2 = "fresa"; //Block scope
    const fruta3 = "naranja"; //Block scope
  }

  console.log(fruta1);
  //No estan definidas las siguientes:
  // console.log(fruta2);
  // console.log(fruta3);
}

frutas();
