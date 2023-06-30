"use strict";
(() => {
    let number;
    let string;
    //Estas variables quedan con any
    let nulo = null;
    let indefinido = undefined;
    //Estas variables quedan con el tipado correcto
    let null2 = null;
    let undefined2 = undefined;
    let number2 = null;
    let string2 = undefined;
    console.log(string2);
    console.log(number2);
    function hi(name) {
        if (name) {
            console.log('Hello ' + name);
        }
        else {
            console.log('Hello nobody');
        }
    }
    function hiv2(name) {
        let retur = 'Hello ';
        retur += name ? name : 'nobody';
        console.log(retur);
    }
    hi('Mateo');
    hi(null);
})();
