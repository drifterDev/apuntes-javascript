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
