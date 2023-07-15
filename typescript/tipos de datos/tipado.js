// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

//Tipos de datos
var cadena = "Hola mundo!";
var numero = 24;
var boolean = true;
var cualquiera = "Cualquier tipo de dato";
var libros = ["El bestiario de axlin", "Los heroes del olimpo"];
var coleccion = ["Hola", 24, false];
console.log(cadena);
console.log(numero);
console.log(boolean);
console.log(cualquiera);
console.log(libros);
console.log(coleccion);
//Tipos de datos multiples
// var variable: number | string = "Hola";
var variable = "Hola";
console.log(variable);
variable = 24;
console.log(variable);
//La diferencia que hay entre let y var
//Var es global y let es en bloque
var n1 = 24;
var n2 = 18;
if (n1 == 24) {
  var n1_1 = 42;
  var n2 = 20;
  console.log(n1_1, n2);
}
console.log(n1, n2);
//Funciones y tipado
function suma(n1, n2, mensaje) {
  return mensaje + (n1 + n2);
}
console.log(suma(15, 12, "La suma es: "));
