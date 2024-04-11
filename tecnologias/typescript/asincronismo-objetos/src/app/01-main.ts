import axios from 'axios';
import { Product } from './models/product.model';
(async () => {
  //Se hace el tipado hacia afuera
  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get(
  //     'https://api.escuelajs.co/api/v1/products'
  //   );
  //   //code
  //   return data;
  // }

  //Se hace el tipado adentro y afuera
  // async function getProducts() {
  //   const { data } = await axios.get<Product[]>(
  //     'https://api.escuelajs.co/api/v1/products'
  //   );
  //   return data;
  // }

  //Si alguna vez no se puede hacer lo anterior
  //Se fuerza el tipado
  async function getProducts() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    const products = promise.data as Product[];
    return products;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} : ${item.title}`));
})();
