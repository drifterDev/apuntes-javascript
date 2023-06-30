"use strict";
(() => {
    let userId;
    function greeting(text) {
        //Se usa typeof para saber el tipado de la variable
        if (typeof text === 'string') {
            console.log(`String: ${text.toLowerCase()}`);
        }
    }
    let medidas;
    medidas = 'px';
    medidas = '%';
    medidas = 'rem';
    // medidas = 'em'; ERROR
})();
