// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

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
