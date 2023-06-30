"use strict";
(() => {
    let idUser;
    //Se usa cuando la variable no tiene un tipo definido
    idUser = 24;
    idUser = 'asd23';
    function greeting(text) {
        //Se usa typeof para saber el tipado de la variable
        if (typeof text === 'string') {
            console.log(`String: ${text.toLowerCase()}`);
        }
        else {
            console.log(`Number: ${text.toFixed(1)}`);
        }
    }
    greeting('Hola!');
    greeting(24156.11234);
})();
