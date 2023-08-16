// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

//Arrays destructuring
let frutas = ["Mango", "Kiwi"];
let [a, b] = frutas;
console.log(a);
console.log(b);

//Object destructuring
let user = {
  name: "Mateo",
  age: 18,
};
let { name, age } = user;
console.log(name, age);

//Spread operator
let person = {
  name: "Diego",
  age: 20,
};
let country = "CO";
let data = { ...person, country };

console.log(data);

//Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
}

sum(3, 4, 5, 6, 7, 8, 9, 0, 0);
