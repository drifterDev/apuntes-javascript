var firstName; //Undefined
firstName = "Mateo";
console.log(firstName);

var lastName = "Alvarez";
lastName = "Murillo";
console.log(lastName);

var secondName = "Alvaro";
var secondName = "Juan";
console.log(secondName);

//Lo mismo con let
let fruta = "mango";
fruta = "fresa";
// let fruta = "banana"; No se puede redeclarar con let
console.log(fruta);

//Lo mismo con const
const animal = "perro";
// const animal = "gato"; No se puede redeclarar con const
// animal = "gato"; No se puede reasignar con const
console.log(animal);

const autos = [];
autos.push("carro1"); //No reasignando, sino modificando
console.log(autos);
autos.pop();
console.log(autos);
