"use strict";
const obj1 = {
  a: "a",
  b: "b",
  c: {},
};

//El problema de esta manera es que los objetos
//que son atributos del objeto copiado, no se copian bien
const obj2 = {};
for (let i in obj1) {
  obj2[i] = obj1[i];
}

obj2["a"] = 45;
obj1["a"] = 54;
obj1["c"] = { value: 24 };
obj2["c"] = { value: 42 };
console.log(obj1);
console.log(obj2);

//Copia mal los objetos dentro de objetos
const obj3 = Object.assign({}, obj1);
//Copia bien los objetos dentro de objetos
const obj4 = Object.create(obj1);
console.log(obj3);
console.log(obj4.__proto__);
