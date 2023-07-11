class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, item) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, item]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let deletedSpace = currentBucket[i];
          delete currentBucket[i];
          currentBucket.splice(i, 1);
          return deletedSpace;
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    let array2 = [];
    for (let i = 0; i < this.data.length + 1; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          array2.push(this.data[i][j][0]);
        }
      }
    }
    return array2;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("Mateo", 2004));
console.log(myHashTable.set("Daniel", 2024));
console.log(myHashTable.get("Mateo"));
console.log(myHashTable.get("Daniel"));
console.log(myHashTable.getAllKeys());
console.log(myHashTable.delete("Daniel"));
console.log(myHashTable.get("Daniel"));
