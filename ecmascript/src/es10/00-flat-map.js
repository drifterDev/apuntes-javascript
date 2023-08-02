// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

const nums = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];
//flat
//Hasta tercer nivel
console.log(nums.flat(3));
console.log(nums.flat());

//Flatmap
const nums2 = [1, 2, 3, 4, 5, 6];
console.log(nums2.flatMap((v) => [v, v ** 2]));
