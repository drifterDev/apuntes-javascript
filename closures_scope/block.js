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
