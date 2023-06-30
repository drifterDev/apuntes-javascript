"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
const n1 = {
    title: 'Camisa negra',
    createdAt: new Date(),
    stock: 12,
    size: 'S',
};
const n2 = {
    title: 'Camisa azul',
    createdAt: new Date(),
    stock: 45,
};
(0, product_service_1.addProduct)(n1);
(0, product_service_1.addProduct)(n2);
console.log((0, product_service_1.calcStock)());
console.log(product_service_1.products);
