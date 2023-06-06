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

var firstName; //Undefined
firstName = "Mateo";
console.log(firstName);

var lastName = "Alvarez";
lastName = "Murillo";
console.log(lastName);

var secondName = "Alvaro";
var secondName = "Juan";
console.log(secondName);

//Lo mismo con let
let fruta = "mango";
fruta = "fresa";
// let fruta = "banana"; No se puede redeclarar con let
console.log(fruta);

//Lo mismo con const
const animal = "perro";
// const animal = "gato"; No se puede redeclarar con const
// animal = "gato"; No se puede reasignar con const
console.log(animal);

const autos = [];
autos.push("carro1"); //No reasignando, sino modificando
console.log(autos);
autos.pop();
console.log(autos);
