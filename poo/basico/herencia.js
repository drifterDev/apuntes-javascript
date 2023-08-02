// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

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
