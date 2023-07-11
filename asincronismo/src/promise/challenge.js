"use strict";

const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}
// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .then(() => console.log("Pasa por aquí"))
//   .catch((error) => console.error(error));

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log("Tenemos a productos");
    console.log(products[0]);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log("Tenemos a categoria del producto");
    console.log(product.category.id);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log("Tenemos el nombre de la categoria");
    console.log(category.name);
  })
  .catch((error) => {
    console.log(error);
  });
