//Singleton
//Se evita la creación de multiples instancias
export class MyService {
  static instance: MyService | null = null;
  private constructor(public name: string) {}
  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Paso por aquí');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const service1 = MyService.create('Oracle');
console.log(service1.getName());
const service2 = MyService.create('Laravel');
console.log(service2.getName());

console.log(service1 === service2);
