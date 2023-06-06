const string = "Soy un string";

//Intentará llenar los espacios que le indiquemos
// (valor indicado)-(longitud string)=Rellena con el string indicado
console.log(string.padStart(19, "*-*"));
console.log(string.padEnd(19, "-*-"));
