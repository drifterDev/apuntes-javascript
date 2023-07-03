const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=6&limit=10";

const main = async () => {
  try {
    const response = await fetch(API);
    const products = await response.json();
    const output = products
      ?.map((item) => {
        return `<article class="Card">
      <img src="${item.images[0]}"/>
      <h2>${item.title}<small>Precio $${item.price}</small></h2>
      </article>`;
      })
      .join("");
    let newItem = document.createElement("section");
    newItem.classList.add("Items");
    newItem.innerHTML = output;
    $app.appendChild(newItem);
  } catch (error) {
    console.log(error);
  }
};

main();
