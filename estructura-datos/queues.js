class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    let nodo = new Node(value);
    if (this.length === 0) {
      this.last = nodo;
      this.first = nodo;
    } else {
      this.last.next = nodo;
      this.last = nodo;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}
