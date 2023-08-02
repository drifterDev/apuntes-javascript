// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const mateo = {
  name: "Mateo Álvarez",
  age: 18,
  cursosAprobados: ["Curso de html y css", "Curso de javascript"],

  //aprobarCurso: funtion(){
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const daniel = new Student("Daniel Ramirez", 19, ["HTML y CSS", "JavaScript"]);
daniel.aprobarCurso("PHP");
mateo.name = "Mateo Murillo";
mateo.aprobarCurso("Curso de php");
console.log(mateo);
console.log(daniel);

//Prototipos con sintaxis de clase
class Student2 {
  // constructor(name, age, cursosAprobados) {
  //   this.name = name;
  //   this.age = age;
  //   this.cursosAprobados = cursosAprobados;
  // }

  constructor({ name, age = 18, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const yesica = new Student2({
  name: "Yesica Jaramillo",
  age: 18,
  cursosAprobados: ["Administracion"],
});
yesica.aprobarCurso("Gerencia");
console.log(yesica);
