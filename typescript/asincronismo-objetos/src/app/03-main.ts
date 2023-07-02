import { ProductHttpService } from './services/product-http.service';

(async () => {
  try {
    const productService = new ProductHttpService();
    console.log('GetAll');
    console.log('***'.repeat(10));
    const products = await productService.getAll();
    console.log(products.length);
    console.log('Update');
    console.log('***'.repeat(10));

    const productId = products[0].id;
    await productService.update(productId, {
      price: 10000,
      title: 'El imperio final',
    });
    console.log('Find');
    console.log('***'.repeat(10));
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.log(error);
  }
})();
