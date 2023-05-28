//Interfaces

interface Usuario {
  setCedula(cedula: number);
  getCedula(): number;
}

//Clases

class Persona implements Usuario {
  public nombre: string;
  public edad: number;
  public apellidos: string;
  public cedula: number;
  constructor(nombre: string, apellidos: string, edad: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setCedula(cedula: number) {
    this.cedula = cedula;
  }

  public getCedula(): number {
    return this.cedula;
  }
}

//Herencia

class Trabajador extends Persona {
  public trabajo: string;
  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    trabajo: string
  ) {
    super(nombre, apellidos, edad);
    this.trabajo = trabajo;
  }

  public setTrabajo(trabajo: string): void {
    this.trabajo = trabajo;
  }

  public getTrabajo(): string {
    return this.trabajo;
  }
}

//Decoradores

// function educacion(nivel: string) {
//   return function (target: Function) {
//     target.prototype.promover = function (): void {
//       console.log("El estudiante tiene nivel educativo de: " + nivel);
//     };
//   };
// }

// @educacion("Bachiller")
// class Estudiante {
//   public nombre: string;
//   constructor(nombre: string) {
//     this.nombre = nombre;
//   }
// }

// var estudiante = new Estudiante("Mateo");
// estudiante.promover();
