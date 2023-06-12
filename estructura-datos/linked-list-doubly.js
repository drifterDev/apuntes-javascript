class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const nodo = new Node(value);
    nodo.prev = this.tail;
    this.tail.next = nodo;
    this.tail = nodo;
    this.length++;
    return this;
  }

  prepend(value) {
    const nodo = new nodo(value);
    nodo.next = this.head;
    this.head.prev = nodo;
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
    nodo.prev = pointer;
    pointer.next = nodo;
    nodo.next = holdingPointer;
    holdingPointer.prev = nodo;
    this.length++;
    return this;
  }
}
