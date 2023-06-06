function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Mateo", "David", "Alet", "Steve"]);
console.log(it.next().value);
