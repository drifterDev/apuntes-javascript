//  MIT License
//
// Copyright (c) 2023 Mateo Álvarez Murillo
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// This software and associated files are subject to the terms and conditions of
// the MIT License and are included in this distribution. A copy of the license
// can be found in the file LICENSE in the root of this distribution.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
