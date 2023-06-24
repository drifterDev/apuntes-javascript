// MIT License

// Copyright (c) 2023 Mateo Álvarez Murillo

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// This software and associated files are subject to the terms and conditions of
// the MIT License and are included in this distribution. A copy of the license
// can be found in the file LICENSE in the root of this distribution.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
