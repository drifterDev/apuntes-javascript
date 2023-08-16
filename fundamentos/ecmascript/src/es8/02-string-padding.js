// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const string = "Soy un string";

//Intentará llenar los espacios que le indiquemos
// (valor indicado)-(longitud string)=Rellena con el string indicado
console.log(string.padStart(19, "*-*"));
console.log(string.padEnd(19, "-*-"));
