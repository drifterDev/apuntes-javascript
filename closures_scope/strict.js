"use strict";
pi = 3.1416; //Daría error por no declarar
console.log(pi);

function funcion() {
  "use strict";
  return (pi = 3.1416);
}
//Da error por no declararla
console.log(funcion());
