// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

//Valores por defecto
function newUser(name, age) {
  var name = name || "Mateo";
  var age = age || 18;
  console.log(name, age);
}

newUser();
newUser("Diego", 20);

//Valores por defecto
function newAdmin(name = "Mateo", age = 18) {
  console.log(name, age);
}

newAdmin();
newAdmin("Diego", 20);
