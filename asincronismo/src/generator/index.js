"use strict";

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* generator2(array) {
  for (let value of array) {
    yield value;
  }
}

const names = ["Mateo", "Yesica", "Daniel", "Kevin"];
const gen2 = generator2(names);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
