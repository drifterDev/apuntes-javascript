// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    let nodo = new Node(value);
    if (this.length === 0) {
      this.top = nodo;
      this.bottom = nodo;
    } else {
      this.top.next = nodo;
      this.top = nodo;
    }
    this.length++;
    return this;
  }
}

let myStack = new Stack();
console.log(myStack.push(45));
console.log(myStack.push(75));
console.log(myStack.peek());
