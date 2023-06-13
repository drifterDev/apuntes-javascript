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

"use strict";
const obj1 = {
  a: "a",
  b: "b",
  c: {},
};

//El problema de esta manera es que los objetos
//que son atributos del objeto copiado, no se copian bien
const obj2 = {};
for (let i in obj1) {
  obj2[i] = obj1[i];
}

obj2["a"] = 45;
obj1["a"] = 54;
obj1["c"] = { value: 24 };
obj2["c"] = { value: 42 };
console.log(obj1);
console.log(obj2);

//Copia mal los objetos dentro de objetos
const obj3 = Object.assign({}, obj1);
//Copia bien los objetos dentro de objetos
const obj4 = Object.create(obj1);
console.log(obj3);
console.log(obj4.__proto__);
