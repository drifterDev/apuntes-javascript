// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();
export { products };
