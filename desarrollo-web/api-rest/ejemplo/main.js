// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const fetchFuntion = async () => {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    img1.src = await data[0].url;
    img2.src = await data[1].url;
    img3.src = await data[2].url;
  } catch (error) {
    console.error("Error en fetch ", error);
  }
};
const btn = document.getElementById("reload");
btn.addEventListener("click", fetchFuntion);

fetchFuntion();
