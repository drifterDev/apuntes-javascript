// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

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
