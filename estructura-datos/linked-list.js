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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const nodo = new Node(value);
    this.tail.next = nodo;
    this.tail = nodo;
    this.length++;
    return this;
  }

  prepend(value) {
    const nodo = new nodo(value);
    nodo.next = this.head;
    this.head = nodo;
    this.length++;
    return this;
  }

  getIndex(index) {
    let nodoReto = this.head;
    for (let i = 0; i <= index; i++) {
      nodoReto = nodoReto.next;
      if (i == index) {
        return nodoReto;
      }
    }
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index == 0) {
      return this.prepend(value);
    }
    const nodo = new Node(value);
    const pointer = this.getIndex(index - 1);
    const holdingPointer = pointer.next;
    pointer.next = nodo;
    nodo.next = holdingPointer;
    this.length++;
    return this;
  }
}

let myList = new LinkedList(1);
console.log(myList.append(2));
console.log(myList.append(3));
console.log(myList.insert(1, 45));
