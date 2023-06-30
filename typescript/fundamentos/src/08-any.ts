(() => {
  let dynamicVar: any;
  //Con el tipado any esta variable puede
  //tener cualquier valor
  //Pero muchas veces no es utilizado

  dynamicVar = [];
  dynamicVar = undefined;
  dynamicVar = null;
  dynamicVar = 24;
  dynamicVar = 'dynamicVar';

  //Castear una variable en typescript
  let rta = dynamicVar as string;
  rta = rta.toLowerCase();
  console.log(rta);

  //Otra forma de castear variables
  let rta2 = <string>dynamicVar;
  rta2 = rta2.toUpperCase();
  console.log(rta2);
})();
