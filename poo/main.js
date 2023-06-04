//  MIT License
//
// Copyright (c) 2023 Mateo Álvarez Murillo
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// This software and associated files are subject to the terms and conditions of
// the MIT License and are included in this distribution. A copy of the license
// can be found in the file LICENSE in the root of this distribution.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
