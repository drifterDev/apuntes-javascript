"use strict";

const API = "https://api.escuelajs.co/api/v1";
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = (await response).json();
  return data;
}

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );
    console.log(`Cantidad productos: ${products.length}`);
    console.log(`Producto: ${product.title}`);
    console.log(`Categoria: ${category.name}`);
  } catch {
    console.log("Error!");
  }
};

anotherFunction(API);
