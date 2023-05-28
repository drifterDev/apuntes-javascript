//Creacion de tipo de dato
type alfanumerico = string | number;

//Tipos de datos
var cadena: string = "Hola mundo!";
var numero: number = 24;
var boolean: boolean = true;
var cualquiera: any = "Cualquier tipo de dato";
var libros: Array<string> = ["El bestiario de axlin", "Los heroes del olimpo"];
var coleccion: Array<any> = ["Hola", 24, false];

console.log(cadena);
console.log(numero);
console.log(boolean);
console.log(cualquiera);
console.log(libros);
console.log(coleccion);

//Tipos de datos multiples
// var variable: number | string = "Hola";
var variable: alfanumerico = "Hola";
console.log(variable);
variable = 24;
console.log(variable);

//La diferencia que hay entre let y var
//Var es global y let es en bloque
var n1: number = 24;
var n2: number = 18;
if (n1 == 24) {
  let n1: number = 42;
  var n2: number = 20;
  console.log(n1, n2);
}
console.log(n1, n2);

//Funciones y tipado
function suma(n1: number, n2: number, mensaje: string): string {
  return mensaje + (n1 + n2);
}

console.log(suma(15, 12, "La suma es: "));
