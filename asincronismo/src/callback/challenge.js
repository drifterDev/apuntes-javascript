const API = "https://api.escuelajs.co/api/v1";

async function hola(urlApi) {
  const api = await fetch(urlApi);
  const data = await api.json();
  console.log(data[0]);
}

hola(`${API}/products/`);
