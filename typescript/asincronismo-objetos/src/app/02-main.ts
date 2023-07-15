import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();
productService.create({
  title: 'Producto 1',
  price: 245839,
  description: 'fdasoi  aj spfqe wuaw eas df',
  categoryId: 345,
  images: [],
});

const products = productService.getAll();
console.log(products);
const productId = products[0].id;
productService.update(productId, { title: 'Producto 2' });
const rta = productService.findOne(productId);
console.log(rta);
console.log(products);
