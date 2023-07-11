"use strict";

// Metodos para manejo de strings
let n = 444;
let word = "Hola soy un STRING jajajaja";
let text = "Hola soy OTRO texto :v";

console.log(typeof n.toString());
console.log(word.toLowerCase());
console.log(text.toUpperCase());
console.log(text.length);
console.log(text.concat(" ", ":", word));

// Metodos de busqueda de strings
let palabra = "carlos";
let parrafo = "mi nombre es carlos";

console.log(parrafo.search(palabra));
console.log(parrafo.indexOf(palabra));
console.log(parrafo.lastIndexOf("e"));
console.log(parrafo.match("mi"));
console.log(parrafo.match(/[a-z]+/g));
console.log(parrafo.substring(3, 13));
console.log(parrafo.charAt(13));
console.log(parrafo.startsWith("mi"));
console.log(parrafo.includes("es"));

// Metodos para reemplazar
let pala = "manzana";
let frutas = "Mi fruta favorita es la naranja    ";

console.log(frutas.replace("naranja", pala));
console.log(frutas.slice(9, 17));
console.log(frutas.split(" "));
// Quita los espacios en blanco al final y al inicio
console.log(frutas.trim());
