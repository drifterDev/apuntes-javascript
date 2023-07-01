import { addProduct } from './products/product.service';
addProduct({
  id: '2',
  title: 'T-shirt',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 45,
  size: 'L',
  category: {
    id: '5432',
    name: 'category 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
