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
