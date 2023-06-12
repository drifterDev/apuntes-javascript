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
// SOFTWARE."use strict";

//> Herencia prototipal
// Clase padre
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello I am " + this.name;
};

// Herencia ES5
function Developer(name) {
  this.name = name;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function (coffee) {
  if (coffee) {
    console.log("I am developing new feature");
  } else {
    console.log("I need coffeeee");
  }
};

var dev = new Developer("Alex");
dev.greet(); //> Hello I am Alex
dev.writeCode(); //> I need coffeeee

//> Herencia clases
class Person {
  constructor(person) {
    this.name = name;
  }

  greet() {
    return `Hello I am ${this.name}`;
  }
}

// ES6
class Developer extends Person {
  constructor(name) {
    super(name);
  }

  writeCode(coffee) {
    coffee
      ? console.log("I am developing new feature")
      : console.log("I need coffeeee");
  }
}

const dev = new Developer("Mateo");
dev.greet(); //> Hello I am Mateo
dev.writeCode(); //> I need coffeeee
