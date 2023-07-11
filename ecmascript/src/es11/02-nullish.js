let anotherNumber = null;
let validate = anotherNumber ?? 5;
console.log(validate);

anotherNumber = 1;
validate = anotherNumber ?? 5;
console.log(validate);
