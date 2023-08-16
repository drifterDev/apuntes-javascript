"use strict";

const fnAsync = (condicion) => {
  return new Promise((resolve, reject) => {
    condicion
      ? setTimeout(() => resolve("Async!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFunction = async (condicion) => {
  const something = await fnAsync(condicion);
  console.log(something);
  console.log("Pasa por aquí");
};

console.log("Before");
anotherFunction(true);
console.log("After");
