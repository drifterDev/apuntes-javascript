import { faker } from '@faker-js/faker';
import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';
for (let i = 0; i < 10; i++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(['M', 'S', 'L']),
    color: faker.color.rgb(),
    isNew: faker.datatype.boolean(),
    tags: [faker.random.words(), faker.random.words()],
    price: parseInt(faker.commerce.price()),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);
const producto = products[9];
console.log(updateProduct(producto.id, { title: 'Libros', stock: 99999 }));
console.log(findProducts({ isNew: true, color: 'rojo' }));
