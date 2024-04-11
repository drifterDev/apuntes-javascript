(() => {
  type Sizes = 'S' | 'M' | 'L';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto1 = createProductToJson('Camisa negra', new Date(), 12, 'S');
  const producto2 = createProductToJson('Camisa azul', new Date(), 29, 'M');
  const producto3 = createProductToJson('Camisa verde', new Date(), 1, 'L');
  console.log(producto1);
  console.log(producto2);
  console.log(producto3);

  const producto4 = createProductToJsonV2('Camisa verde', new Date(), 1);
  console.log(producto4);
})();
