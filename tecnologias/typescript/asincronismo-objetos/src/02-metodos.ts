//Metodos
export class User {
  id: number | string = 0;
  name: string = 'Pedro';
  age: number;

  constructor(id: number | string, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  greeting(): string {
    return this.name + ' say <Hello!>';
  }

  add(amount: number, type: 'days' | 'month' | 'year') {
    if (type === 'days') {
      this.age += Math.floor(amount / 365);
    } else if (type === 'month') {
      this.age += Math.floor(amount / 12);
    } else {
      this.age += amount;
    }
  }
}

const user1 = new User('32345h345', 'Pedro', 24);
console.log(user1);
console.log(user1.greeting());
user1.add(2343, 'days');
console.log(user1);
