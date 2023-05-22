"use strict";

window.addEventListener("load", () => {
  //LocalStorage
  //Comprobamos si podemos usarlo
  if (typeof Storage !== "undefined") {
    console.log("Se puede usar localStorage");
  } else {
    console.log("No se puede usar localStorage");
  }

  //Procedemos a utilizarlo
  //Guardando datos

  //Crear item (clave, valor)
  localStorage.setItem("titulo", "El bestiario de axlin");

  //Recuperar item
  document.querySelector("#libros").innerHTML = localStorage.getItem("titulo");
  console.log(localStorage.getItem("titulo"));

  //Guardar objetos
  let usuario = {
    name: "Mateo",
    email: "mateo@alvarez.dev",
    age: 24,
  };

  //Se suele guardar datos en tipo string o un numero, no objetos :(
  //Se convierte el objeto en tipo json.string
  localStorage.setItem("usuario", JSON.stringify(usuario));

  //Recuperar json.string
  //El metodo es para convertir el string en el objeto json
  let jason = JSON.parse(localStorage.getItem("usuario"));
  console.log(jason);

  //Para eliminar items
  localStorage.removeItem("usuario");

  //Para vacear todo el local storage
  // localStorage.clear()
});
