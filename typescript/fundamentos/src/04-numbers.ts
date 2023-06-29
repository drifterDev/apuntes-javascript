(() => {
  let productPrice: number = 100;
  const PI: number = 3.1416;

  console.log(productPrice);
  console.log(PI);

  let productInStock: number;
  // console.log(productInStock); ERROR, undefined
  //Aun no se puede utilizar la variable porque no esta inicializada
  productInStock = 94;
  console.log(productInStock);

  //Typescript infiere el tipado
  let discount = parseInt('348');
  console.log(discount);

  //Hexadecimal
  let hx = 0xfff;
  console.log(hx);

  //Binario
  let binario = 0b010111101101;
  console.log(binario);
})();
