"use strict";
(() => {
    //Especificar el tipado del retorno
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total;
    };
    function greeting(name) {
        if (name) {
            console.log('Hello ' + name.toLowerCase());
        }
        else {
            console.log('Hello nobody');
        }
    }
    const rta = calcTotal([1, 234, 435, 45366, 45, 3]);
    console.log(rta);
    greeting('Mateo');
    greeting();
})();
