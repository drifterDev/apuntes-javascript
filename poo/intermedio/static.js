// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
const estudiante = {
  grado: 29,
  age: 24,
  materias: ["Matematicas", "Español"],
  addMateria(materia) {
    this.materias.push(materia);
  },
};

console.log(Object.keys(estudiante));
console.log(Object.entries(estudiante));
console.log(Object.getOwnPropertyNames(estudiante));
console.log(Object.getOwnPropertyDescriptors(estudiante));

//Crear nuevo atributo
//Si writable es false: no se puede modificar el atributo
//Si enumerable es false: no se puede acceder con Object.keys
//Si configurable es false: no se puede eliminar el atributo
Object.defineProperty(estudiante, "Carrera", {
  value: "Ingenieria",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(estudiante);
