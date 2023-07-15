// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log("Hola " + this.name);
  }

  get name() {
    return this.name;
  }

  set name(n) {
    this.name = n;
  }

  get age() {
    return this.age;
  }

  set age(n) {
    this.age = n;
  }
}

const estudiante = new User("Mateo", 18);
console.log(estudiante);
console.log(estudiante.name, estudiante.age);
