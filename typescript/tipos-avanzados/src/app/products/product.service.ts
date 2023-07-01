import { Product } from './products.model';

export const addProduct = (data: Product) => {
  products.push(data);
};

const products: Product[] = [];
