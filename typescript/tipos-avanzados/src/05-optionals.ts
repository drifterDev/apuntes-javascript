export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    //Cuando no se envia nada se utiliza el nullish-coalescing
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

//''===false
//0===false
//false===false

const p1 = createProduct(1, false, 12);
const p2 = createProduct(3, false);
const p3 = createProduct(24);
console.log(p1);
console.log(p2);
console.log(p3);
