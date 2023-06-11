//> Declaración
function getResult() {
  return "Results";
}
getResult(); //> Results

//> Expresión
const getResult = function () {
  return "Results";
};
getResult(); //> Results

// Number es el parámetro de la función
function getDouble(number) {
  return number * 2;
}

// 10 es el argumento de la función
getDobule(10);

//> Parámetros por defecto
function greet(person = "strange") {
  console.log("Hello " + person);
}

greet(); //> Sin parámetro. Hello strange
greet("Mateo"); //> Hello Mateo

//> Parámetro rest y operador spread
// Sin rest
function add(x, y) {
  return x + y;
}

add(1, 2, 3, 4, 5); //> 3

// Con rest
function add(...args) {
  return args.reduce((previous, current) => previous + current, 0);
}

add(1, 2, 3, 4, 5); //> 15

//> El parámetro rest debe de ser el último
function example(x, y, ...args) {
  console.log(args);
}

example(1, 2, 3, 4, 5); //> [3, 4, 5]

//> Spread también nos permite clonar objetos y arrays de una forma muy simple y expresiva
// OBJETO
const course = {
  title: "JavaScript",
  content: "Todo lo que necesitas saber de JavaScript",
};

// Clonado con Object.assign()
let courseCloned = Object.assign({}, course);
// Clonado con el spread operator
courseCloned = { ...course };

// ARRAY
let numbers = [1, 2, 3];
// Clonado con slice()
numbersCloned = myArray.slice();
// Clonado con el spread operator
numbersCloned = [...myArray];

//> También podemos usar el operador spread para concatenar arrays:
const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

// Con concat
let newArray = numbersA.concat(numbersB); //> [1, 2, 3, 4, 5, 6]

// Con spread
newArray = [...numbersA, ...numbersB]; //> [1, 2, 3, 4, 5, 6]
