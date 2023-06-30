"use strict";
(() => {
    function createProductToJson(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    }
    const createProductToJsonV2 = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    };
    const producto1 = createProductToJson('Camisa negra', new Date(), 12, 'S');
    const producto2 = createProductToJson('Camisa azul', new Date(), 29, 'M');
    const producto3 = createProductToJson('Camisa verde', new Date(), 1, 'L');
    console.log(producto1);
    console.log(producto2);
    console.log(producto3);
    const producto4 = createProductToJsonV2('Camisa verde', new Date(), 1);
    console.log(producto4);
})();
