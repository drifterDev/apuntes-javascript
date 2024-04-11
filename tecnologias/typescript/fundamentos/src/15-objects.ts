(() => {
  type Product = {
    title: string;
    createdAt: Date;
    stock?: number;
  };
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  const n1: Product = {
    title: 'Camisa negra',
    createdAt: new Date(),
    stock: 12,
  };
  const n2: Product = {
    title: 'Camisa azul',
    createdAt: new Date(),
  };
  addProduct(n1);
  addProduct(n2);

  console.log(products);
})();
