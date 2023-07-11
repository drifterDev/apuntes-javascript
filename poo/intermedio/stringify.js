"use strict";
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA(value) {
    this.a = value;
  },
};

//No copian los metodos
//Convertir de objeto a string
const obj2 = JSON.stringify(obj1);
console.log(obj2);

//Convertir de string a objeto
const obj3 = JSON.parse(obj2);
console.log(obj3);
