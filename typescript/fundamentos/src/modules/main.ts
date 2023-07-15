import { addProduct, calcStock, products } from './product.service';
import { Product } from './produc.model';

const n1: Product = {
  title: 'Camisa negra',
  createdAt: new Date(),
  stock: 12,
  size: 'S',
};
const n2: Product = {
  title: 'Camisa azul',
  createdAt: new Date(),
  stock: 45,
};
addProduct(n1);
addProduct(n2);

console.log(calcStock());
console.log(products);
