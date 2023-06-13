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
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const nodo = new Node(value);
    if (this.root === null) {
      this.root = nodo;
    } else {
      let nodoPresente = this.root;
      while (true) {
        if (value < nodoPresente.value) {
          if (!nodoPresente.left) {
            nodoPresente.left = nodo;
            return this;
          }
          nodoPresente = nodoPresente.left;
        } else {
          if (!nodoPresente.right) {
            nodoPresente.right = nodo;
            return this;
          }
          nodoPresente = nodoPresente.right;
        }
      }
    }
  }

  find(value, nodo = this.root) {
    if (nodo === null) {
      return false;
    } else if (nodo.value < value) {
      return this.find(value, nodo.right);
    } else if (nodo.value > value) {
      return this.find(value, nodo.left);
    } else {
      return true;
    }
  }
}

let arbol = new Tree();
arbol.insert(96);
arbol.insert(82);
arbol.insert(34);
arbol.insert(46);
console.log(arbol.find(82));
console.log(arbol.find(2));
