(() => {
  //Para no estar escribiendo el mismo tipado una y otra vez
  type UserId = string | number;
  let userId: UserId;

  function greeting(text: UserId) {
    //Se usa typeof para saber el tipado de la variable
    if (typeof text === 'string') {
      console.log(`String: ${text.toLowerCase()}`);
    }
  }
  //Literal types
  type Medidas = 'px' | 'rem' | '%';
  let medidas: Medidas;
  medidas = 'px';
  medidas = '%';
  medidas = 'rem';
  // medidas = 'em'; ERROR
})();
