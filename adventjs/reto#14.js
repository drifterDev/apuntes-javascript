// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

function maxGifts(houses) {
  let arr=new Array(houses.length+1).fill(0)
  arr[1]=houses[0]
  for(let i=1;i<houses.length;i++){
    arr[i+1]=Math.max(arr[i], arr[i-1]+houses[i]);
  }
  return arr[houses.length]
}


console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)