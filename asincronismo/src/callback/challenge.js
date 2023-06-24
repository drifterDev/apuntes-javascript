"use strict";

const API = "https://api.escuelajs.co/api/v1"; // API donde vamos a traer los datos.

async function fetchData(urlApi) {
  try {
    const response = await fetch(urlApi);
    if (!response.ok) {
      throw new Error(`Error ${urlApi}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function fetchProductData() {
  try {
    const data1 = await fetchData(`${API}/products`);
    const data2 = await fetchData(`${API}/products/${data1[0].id}`);
    const data3 = await fetchData(`${API}/categories/${data2?.category?.id}`);

    console.log(data1[0]);
    console.log(data2.title);
    console.log(data3.name);
  } catch (error) {
    console.error(error);
  }
}

fetchProductData();
