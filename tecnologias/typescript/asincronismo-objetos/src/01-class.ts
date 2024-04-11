//Instancia
const date = new Date();

//Clase
class User {
  id: number | string = 0;
  name: string = 'Pedro';

  constructor(id: number | string, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user1 = new User('32345h345', 'Pedro');
console.log(user1);
