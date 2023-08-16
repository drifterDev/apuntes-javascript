// MIT License

// Copyright (c) 2023 Mateo Álvarez Murillo

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

//Lo mismo, pero con axios
//Hecho con el atributo de headers al hacer la peticion de fetch
"use strict";
const API_KEY = "";
const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});
api.defaults.headers.common["X-API-KEY"] = API_KEY;
const API_URL_FAVORIE_DELETE = (id) => `/favourites/${id}`;
const spanError = document.getElementById("error");

async function loadRandomInfo() {
  const { data, status } = await api.get("images/search?limit=2");

  if (status !== 200) {
    spanError.innerHTML = "ERROR " + status + " " + data.message;
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => saveFavoritesInfo(data[0].id);
    btn2.onclick = () => saveFavoritesInfo(data[1].id);
  }
}

async function loadFavoritesInfo() {
  const { data, status } = await api.get("/favourites");
  if (status !== 200) {
    spanError.innerHTML = "ERROR " + status + " " + data.message;
  } else {
    const section = document.getElementById("favoritesMichis");
    section.innerHTML = "";
    const h2 = document.createElement("h2");
    const titulo = document.createTextNode("Gatos guardados");
    h2.appendChild(titulo);
    section.appendChild(h2);
    data.forEach((element) => {
      const article = document.createElement("article");
      const img = document.createElement("img");
      const btn = document.createElement("button");
      const btnText = document.createTextNode("Quitar de favoritos");
      btn.appendChild(btnText);
      btn.onclick = () => deleteFavoriteInfo(element.id);
      img.src = element.image.url;
      img.width = "250";
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}

async function saveFavoritesInfo(id) {
  const { data, status } = await api.post("/favourites", {
    image_id: id,
  });

  if (status !== 200) {
    spanError.innerHTML = "ERROR " + status + " " + data.message;
  } else {
    console.log("Guardado exitoso");
    loadFavoritesInfo();
  }
}

async function deleteFavoriteInfo(id) {
  const { data, status } = await api.delete(API_URL_FAVORIE_DELETE(id));
  if (status !== 200) {
    spanError.innerHTML = "ERROR " + status + " " + data.message;
  } else {
    console.log("Eliminado con exito");
    loadFavoritesInfo();
  }
}

async function uploadFile() {
  const form = document.getElementById("unploadForm");
  const formData = new FormData(form);
  const { data, status } = await api.post("/images/upload", formData);
  if (status !== 201) {
    console.log(data);
    console.log(res);
    spanError.innerHTML = "ERROR " + status + " " + data.message;
  } else {
    console.log("Subida con exito");
    saveFavoritesInfo(data.id);
    loadFavoritesInfo();
  }
}

loadRandomInfo();
loadFavoritesInfo();
