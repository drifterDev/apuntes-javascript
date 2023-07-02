export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('woof!', this.name);
  }
}

export class Dog extends Animal {
  constructor(protected name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      this.doSomething();
    }
  }
}

const animal1 = new Animal('Mochi');
console.log(animal1.greeting());
animal1.move();

const perro1 = new Dog('firu', 'Pedro');
console.log(perro1.greeting());
perro1.woof(2);
// perro1.name = 'firu2'; ERROR
// perro1.woof(2);
