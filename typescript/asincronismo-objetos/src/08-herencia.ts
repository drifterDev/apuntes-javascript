export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(public name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

const animal1 = new Animal('Mochi');
console.log(animal1.greeting());
animal1.move();

const perro1 = new Dog('firu', 'Pedro');
console.log(perro1.greeting());
perro1.woof(5);
