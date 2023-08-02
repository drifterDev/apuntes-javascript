// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function videoPlay(id) {
  const urlSecreta = "https://.../" + id;
  console.log("Se esta produciendo " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://.../" + id;
  console.log("Se pausó " + urlSecreta);
}

class clase {
  constructor({ name, videoId }) {
    this.name = name;
    this.videoId = videoId;
  }

  reproducir() {
    videoPlay(this.videoId);
  }

  pausar() {
    videoPlay(this.videoId);
  }
}

//Indicamos que solo esto es accecible con el export
export class Student {
  constructor({ name, age, level }) {
    this.name = name;
    this.age = age;
    this.level = level;
  }

  get name() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  setLevel(level) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }
}

var mateo = new Student({
  name: "Mateo",
  age: 18,
  level: "Universitario",
});
console.log(mateo.name);
