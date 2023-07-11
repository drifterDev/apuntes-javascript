//Sería como paquetes en java o python

module Universidad {
  export class Facultad {
    constructor(public nombre: string) {
      console.log("Facultad " + nombre);
    }
  }

  export class Salon {
    constructor(public sitio: string) {
      console.log("Salon en " + sitio);
    }
  }
}

import Facultad = Universidad.Facultad;

let minas = new Facultad("Minas");
