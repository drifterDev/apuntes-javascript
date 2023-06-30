"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    const n1 = {
        title: 'Camisa negra',
        createdAt: new Date(),
        stock: 12,
    };
    const n2 = {
        title: 'Camisa azul',
        createdAt: new Date(),
    };
    addProduct(n1);
    addProduct(n2);
    console.log(products);
})();
