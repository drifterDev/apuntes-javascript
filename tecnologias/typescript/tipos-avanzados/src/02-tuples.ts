const prices: (number | string)[] = [1, 2, 3, 4, 5, 'hola'];
prices.push('342');
prices.push(342);

//Solamente acepta el primer espacio como string
//Y el segundo espacio como number
//Pero no acepta más elementos
// let user: [string, number] = ['bytes', 12];
// user = ['String', 2345];
let user: [string, number, boolean] = ['bytes', 12, true];
user = ['String', 2345, false];
const [username, age] = user;
console.log(username);
console.log(age);
