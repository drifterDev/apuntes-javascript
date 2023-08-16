// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const privateAtributos = {
    _name: name,
  };

  const publicAtributos = {
    // El resto de atributos serán públicos:
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName() {
      return privateAtributos["_name"];
    },
    changeName(newName) {
      privateAtributos["_name"] = newName;
    },
  };

  Object.defineProperty(publicAtributos, "readName", {
    // 👈👈
    writable: false,
    configurable: false,
  });
  Object.defineProperty(publicAtributos, "changeName", {
    // 👈👈
    writable: false,
    configurable: false,
  });

  return publicAtributos;
}

// Creamos un nuevo objeto
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });

// Intentamos eliminar y alterar los métodos changeName y readName
delete juan.changeName; // false
delete juan.readName; // false
juan.changeName = function (nombreImpostor) {
  // NO se ve afectada la función original
  return "patatas";
};
