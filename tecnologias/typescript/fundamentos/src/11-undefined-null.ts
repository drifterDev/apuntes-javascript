(() => {
  let number: Number;
  let string: String;

  //Estas variables quedan con any
  let nulo = null;
  let indefinido = undefined;

  //Estas variables quedan con el tipado correcto
  let null2: null = null;
  let undefined2: undefined = undefined;

  let number2: number | null = null;
  let string2: string | undefined = undefined;
  console.log(string2);
  console.log(number2);

  function hi(name: string | null) {
    if (name) {
      console.log('Hello ' + name);
    } else {
      console.log('Hello nobody');
    }
  }

  function hiv2(name: string | null) {
    let retur = 'Hello ';
    retur += name ? name : 'nobody';
    console.log(retur);
  }

  hi('Mateo');
  hi(null);
})();
