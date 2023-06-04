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

class Comentario {
  constructor({ content, StudentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentRole = studentRole;
    this.StudentName = StudentName;
    this.likes = 0;
  }

  publicar() {
    console.log(this.StudentName + " (" + this.studentRole + ")");
    console.log(this.content);
    console.log(this.likes + " likes");
  }
}

class curso {
  constructor(name, isFree) {
    this.name = name;
    this.isFree = isFree;
  }
}

class Student {
  constructor({ name, age = 18, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }

  publicarComentario(comentarioContent) {
    const comentar = new Comentario({
      StudentName: this.name,
      studentRole: "estudiante",
      content: comentarioContent,
    });
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  aproveCourse(newCourse) {
    if (newCourse.isFree) {
      super.aprobarCurso(newCourse);
    } else {
      console.log("Lo siento " + this.name + " solo puedes ver cursos gratis");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  aproveCourse(newCourse) {
    super.aprobarCurso(newCourse);
  }
}
