"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({
        email: 'maalvarezmu@unal.edu.co',
        password: 12345678,
    });
    login({
        email: 'correo@gmail.com',
        password: 23548903,
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Camisa negra',
        createdAt: new Date(),
        stock: 12,
    });
    addProduct({
        title: 'Camisa azul',
        createdAt: new Date(),
    });
    console.log(products);
})();
