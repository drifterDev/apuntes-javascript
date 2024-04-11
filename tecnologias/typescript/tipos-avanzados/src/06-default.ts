export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock,
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
