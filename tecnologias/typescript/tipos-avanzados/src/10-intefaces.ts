type Sizes = 'S' | 'M' | 'L';
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Sizes;
// };
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const addProduct = (data: Product) => {
  products.push(data);
};

const products: Product[] = [];
products.push({
  id: '2',
  title: 'T-shirt',
  createdAt: new Date(),
  stock: 45,
  size: 'L',
});
