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

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    let item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item = null) {
    if (item != null) {
      if (this.length == 1) {
        this.data[1] = this.data[0];
      } else if (this.length != 0) {
        for (let i = this.length; i >= 0; i--) {
          this.data[i] = this.data[i - 1];
        }
      }
      this.data[0] = item;
      this.length++;
    }
    return this.length;
  }

  shift() {
    let item = this.data[0];
    this.delete(0);
    return item;
  }
}

const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(true);
myArray.push("hola");
console.log(myArray.delete(0));
console.log(myArray.pop());
console.log(myArray.get(1));
console.log(myArray.data);

const myarray = new MyArray();

console.log(myarray.unshift("!!!"));
console.log(myarray.data);
console.log(myarray.unshift("Platzinauta"));
console.log(myarray.data);
console.log(myarray.unshift("lograste"));
console.log(myarray.data);
console.log(myarray.unshift("lo"));
console.log(myarray.data);

const myArray2 = new MyArray();
myArray2.unshift("Suerte");
myArray2.unshift("Con el");
myArray2.unshift("desafio");
myArray2.unshift("platzinauta");
myArray2.unshift("Un 🐱 random en el desafío");

console.log(myArray2.shift());
