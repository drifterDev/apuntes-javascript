"use strict";

window.addEventListener("load", function () {
  let libro = {
    titulo: "El nombre del viento",
    year: 2004,
    country: "USA",
  };

  console.log(libro);
  console.log(libro.titulo);
  console.log(libro.year);
  libro.year = 2005;
  console.log(libro.year);
  console.log(libro.country);

  let libros = [
    { titulo: "El bestiario de axlin", year: 2015, country: "Spain" },
    { titulo: "El secreto de Xein", year: 2016, country: "Spain" },
    { titulo: "La mision de Rox", year: 2018, country: "Spain" },
    libro,
  ];

  let cajaLibros = document.getElementById("libros");
  let index;
  for (index in libros) {
    let p = document.createElement("p");
    p.append(libros[index].titulo + " - " + libros[index].year);
    cajaLibros.append(p);
  }
});
