import axios from 'axios';
(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('true');
      }, time);
    });
    return promise;
  }

  console.log('***'.repeat(10));
  const rta = await delay(2000);
  console.log(rta.toUpperCase());

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  //Al ponerle async el retorno sera una promesa
  async function getProductsAsync() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  console.log('***'.repeat(10));
  const products = await getProducts();
  console.log(products.data);

  console.log('***'.repeat(10));
  const products2 = await getProductsAsync();
  console.log(products2);
})();
